import {
    defineDeserializer,
    defineQuery,
    defineSystem,
    DESERIALIZE_MODE,
    IWorld,
    removeEntity,
} from "bitecs";
import {
    createCustomDataView,
    deserializeGameState,
    Player,
    serializationConfig,
} from "roll-rounds-shared";
import { NetworkSync } from "roll-rounds-shared/src/networking";
import { IClientNetworkWorld } from ".";

export function createNetworkSyncSystem(world: IWorld & IClientNetworkWorld) {
    const deserializer = defineDeserializer(serializationConfig);

    const playerQuery = defineQuery([Player]);

    const networkSyncQuery = defineQuery([NetworkSync]);

    async function onFirstMessage(e: MessageEvent<Blob>) {
        const view = new DataView(await e.data.arrayBuffer());
        world.playerId = view.getUint8(0);
        console.log("PLAYER ID", world.playerId);
    }

    async function onMessage(e: MessageEvent<Blob>) {
        const buffer = await e.data.arrayBuffer();
        const view = createCustomDataView(buffer);
        const gameState = deserializeGameState(view);
        Object.assign(world.gameState, gameState);
        console.log(gameState);

        const ecsBuffer = buffer.slice(view.pos);

        const syncedEids = new Set(
            deserializer(world, ecsBuffer, DESERIALIZE_MODE.MAP)
        );

        const networkSyncEntities = networkSyncQuery(world);

        for (const eid of networkSyncEntities) {
            if (!syncedEids.has(eid)) {
                removeEntity(world, eid);
            }
        }

        if (world.playerEid == null) {
            const players = playerQuery(world);
            for (const eid of players) {
                if (Player.id[eid] === world.playerId) {
                    world.playerEid = eid;
                    console.log("PLAYER EID", eid);
                    break;
                }
            }
        }
    }

    let gotFirstMessage = false;

    world.wsClient.addEventListener(
        "message",
        async (e: MessageEvent<Blob>) => {
            if (!gotFirstMessage) {
                onFirstMessage(e);
                gotFirstMessage = true;
                return;
            }

            await onMessage(e);
        }
    );

    return defineSystem((world: IWorld) => {
        return world;
    });
}
