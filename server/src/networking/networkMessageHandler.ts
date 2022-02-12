import { IWorld } from "bitecs";
import { Emitter } from "mitt";
import { createCustomDataView, deserializeCommand } from "roll-rounds-shared";
import { INetworkWorld } from ".";
import { IEventWorld } from "../events";
import { createPlayerCommand } from "../players/IPlayerCommand";
import { NetworkEvent } from "./events";

export function setupNetworkMessageHandler(
    world: IWorld & IEventWorld & INetworkWorld
) {
    const { idBySocket } = world.networking;

    world.events.on(
        NetworkEvent.Message,
        ([ws, buffer]: [WebSocket, ArrayBuffer]) => {
            const command = deserializeCommand(createCustomDataView(buffer));

            world.events.emit(
                command.type,
                createPlayerCommand(idBySocket.get(ws)!, command)
            );
        }
    );
}
