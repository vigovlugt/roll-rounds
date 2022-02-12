import { defineSystem, IWorld } from "bitecs";
import { Emitter, EventType } from "mitt";
import { CommandType, IInputCommand, PlayerInput } from "roll-rounds-shared";
import { IEventWorld } from "../events";
import { INetworkWorld } from "../networking";
import { createEventQueue } from "../utils/events";
import { IPlayerCommand } from "./IPlayerCommand";

export function createPlayerInputSystem(
    world: IWorld & INetworkWorld & IEventWorld
) {
    const inputCommandQueue = createEventQueue<IPlayerCommand<IInputCommand>>(
        world.events,
        CommandType.Input
    );

    const { entityById } = world.networking;

    return defineSystem((world: IWorld) => {
        for (const cmd of inputCommandQueue) {
            const { playerId, command } = cmd!;
            const eid = entityById.get(playerId)!;

            PlayerInput.axes.x[eid] = command.axes.x;
            PlayerInput.axes.y[eid] = command.axes.y;
        }

        return world;
    });
}
