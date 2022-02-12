import {
    addComponent,
    addEntity,
    defineSystem,
    IWorld,
    removeEntity,
} from "bitecs";
import {
    CircleCollider,
    IGameStateWorld,
    Player,
    PlayerInput,
    Transform,
    Vector,
} from "roll-rounds-shared";
import { NetworkSync } from "roll-rounds-shared/src/networking";
import { NetworkTransform } from "roll-rounds-shared/src/networking/networkTransform";
import { INetworkWorld } from "../networking";
import { NetworkEvent } from "../networking/events";
import { createEventQueue } from "../utils/events";

export function createPlayerSpawnSystem(
    world: IWorld & INetworkWorld & IGameStateWorld
) {
    const { entityById, socketById, idBySocket } = world.networking;
    const { gameState } = world;

    const networkConnectionQueue = createEventQueue<WebSocket>(
        world.events,
        NetworkEvent.Connect
    );

    const networkDisconnectQueue = createEventQueue<WebSocket>(
        world.events,
        NetworkEvent.Disconnect
    );

    let nextId = 0;

    return defineSystem((world: IWorld) => {
        for (const websocket of networkConnectionQueue) {
            const playerId = nextId;

            const eid = createPlayer(
                world as IWorld & INetworkWorld,
                {
                    x: Math.random() * 128,
                    y: Math.random() * 128,
                },
                playerId
            );
            gameState.players++;

            entityById.set(playerId, eid);
            socketById.set(playerId, websocket!);
            idBySocket.set(websocket!, playerId);

            const idBuffer = new ArrayBuffer(1);
            new DataView(idBuffer).setUint8(0, playerId);
            websocket!.send(idBuffer);

            nextId++;
        }

        for (const ws of networkDisconnectQueue) {
            const playerId = idBySocket.get(ws!)!;
            console.log("DESPAWN PLAYER", playerId);

            killPlayer(world as IWorld & INetworkWorld, playerId);
            gameState.players--;

            socketById.delete(playerId);
            idBySocket.delete(ws!);
        }

        return world;
    });
}

export function createPlayer(
    world: IWorld & INetworkWorld,
    pos: Vector,
    playerId: number
) {
    const eid = addEntity(world);

    world.networking.entityById.set(playerId, eid);

    const components = [
        Player,
        Transform,
        CircleCollider,
        PlayerInput,
        NetworkSync,
        NetworkTransform,
    ];

    for (const component of components) {
        addComponent(world, component, eid);
    }

    Transform.x[eid] = pos.x;
    Transform.y[eid] = pos.y;

    CircleCollider.radius[eid] = 8;
    Player.id[eid] = playerId;

    return eid;
}

export function killPlayer(world: IWorld & INetworkWorld, playerId: number) {
    const { entityById } = world.networking;

    const eid = entityById.get(playerId);
    if (eid !== undefined) {
        removeEntity(world, eid);
        entityById.delete(playerId);
    }
}
