import { IWorld } from "bitecs";
import {
    createCustomDataView,
    createInputCommand,
    serializeCommand,
} from "roll-rounds-shared";

export function setupWsClient(world: IWorld) {
    const wsClient = new WebSocket("ws://localhost:3001");
    world.wsClient = wsClient;
    world.playerId = null;
    world.playerEid = null;
}

export interface IClientNetworkWorld {
    wsClient: WebSocket;
    playerId: number | null;
    playerEid: number | null;
}
