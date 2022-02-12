import { IWorld } from "bitecs";
import { Emitter } from "mitt";
import { IGameStateWorld } from "roll-rounds-shared";
import { WebSocketServer } from "ws";
import { IEventWorld } from "../events";
import { NetworkEvent } from "./events";

export function setupWsServer(world: IWorld & IEventWorld & IGameStateWorld) {
    const wss = new WebSocketServer({
        port: 3001,
    });

    world.wss = wss;

    wss.on("connection", (ws) => {
        world.events.emit(NetworkEvent.Connect, ws);

        ws.on("close", () => {
            world.events.emit(NetworkEvent.Disconnect, ws);
        });

        ws.on("message", (e: Buffer) => {
            world.events.emit(NetworkEvent.Message, [
                ws,
                new Uint8Array(e).buffer,
            ]);
        });
    });
}

export function setupNetworkWorld(world: IWorld) {
    const entityById = new Map<number, number>();
    const socketById = new Map<number, WebSocket>();
    const idBySocket = new Map<WebSocket, number>();

    world.networking = { entityById, socketById, idBySocket };
}

export interface INetworkWorld {
    networking: {
        entityById: Map<number, number>;
        socketById: Map<number, WebSocket>;
        idBySocket: Map<WebSocket, number>;
    };
}
