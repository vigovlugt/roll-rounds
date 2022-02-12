import { IWorld } from "bitecs";
import mitt, { Emitter, EventType } from "mitt";

export function setupEventQueue(world: IWorld): IWorld & IEventWorld {
    world.events = mitt();

    return world as IWorld & IEventWorld;
}

export interface IEventWorld {
    events: Emitter<Record<any, any>>;
}
