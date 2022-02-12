import { IWorld } from "bitecs";

export function createTimeSystem(world: IWorld) {
    world.time = {
        delta: 0,
        elapsed: 0,
        previous: performance.now(),
    };

    return function timeSystem(world: IWorld) {
        const { time } = world;

        const now = performance.now();
        const delta = now - time.previous;
        time.delta = delta;
        time.elapsed += delta;
        time.previous = now;

        return world;
    };
}
