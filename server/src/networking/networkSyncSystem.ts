import { defineQuery, defineSerializer, IWorld } from "bitecs";
import {
    serializationConfig,
    Transform,
    NetworkSync,
    NetworkTransform,
    serializeGameState,
    IGameStateWorld,
} from "roll-rounds-shared";

import { INetworkWorld } from ".";
import { IEventWorld } from "../events";

export function createNetworkSyncSystem(
    world: IWorld & IEventWorld & INetworkWorld & IGameStateWorld
) {
    const { wss, gameState } = world;

    const transformQuery = defineQuery([Transform, NetworkTransform]);

    const syncQuery = defineQuery([NetworkSync]);
    // console.log(serializationConfig);
    const serializer = defineSerializer(serializationConfig);

    return (world: IWorld) => {
        const networkTransformEntities = transformQuery(world);
        for (const eid of networkTransformEntities) {
            NetworkTransform.x[eid] = Transform.x[eid];
            NetworkTransform.y[eid] = Transform.y[eid];
        }

        const syncEntities = syncQuery(world);

        const gameStateBuffer = serializeGameState(gameState);
        const ecsState = serializer(syncEntities);

        const packet = concatenate(gameStateBuffer, ecsState);

        for (const client of wss.clients) {
            client.send(packet);
        }

        return world;
    };
}

function concatenate(...arrayBuffer: ArrayBuffer[]) {
    const size = arrayBuffer.reduce((a, b) => a + b.byteLength, 0);
    const result = new Uint8Array(size);

    let offset = 0;
    for (const arr of arrayBuffer) {
        result.set(new Uint8Array(arr), offset);
        offset += arr.byteLength;
    }

    return result.buffer;
}
