import { createWorld, IWorld, pipe } from "bitecs";
import {
    createPhysicsSystem,
    createPlayerCollissionSystem,
    createPlayerMovementSystem,
    setupGameState,
} from "roll-rounds-shared";
import { createTimeSystem } from "roll-rounds-shared/src/time";
import { IClientNetworkWorld, setupWsClient } from "./networking";
import { createNetworkSyncSystem } from "./networking/networkSyncSystem";
import { createPlayerInputSystem } from "./input/playerInputSystem";
import { createRenderSystem } from "./rendering";
import { createRenderer } from "./rendering";
import { createInterpolateTransformSystem } from "./networking/interpolateTransformSystem";
import { createMotionBlurSystem } from "./rendering/motionBlurSystem";
import { createPitRenderSystem } from "./rendering/pitRenderSystem";

export function main() {
    const renderer = createRenderer();

    const world: IWorld & IClientNetworkWorld = createWorld();
    setupGameState(world);
    setupWsClient(world);

    const timeSystem = createTimeSystem(world);
    // const physicsSystem = createPhysicsSystem(world);

    const playerInputSystem = createPlayerInputSystem(world);
    // const playerMovementSystem = createPlayerMovementSystem(world);
    // const playerCollissionSystem = createPlayerCollissionSystem();
    const renderSystem = createRenderSystem(world, renderer);
    // const motionBlurSystem = createMotionBlurSystem(world);
    const networkSyncSystem = createNetworkSyncSystem(world);
    const iterpolateTransformSystem = createInterpolateTransformSystem(world);
    const pitRenderSystem = createPitRenderSystem(renderer);

    const pipeline = pipe(
        timeSystem,
        playerInputSystem,
        // playerMovementSystem,
        // playerCollissionSystem,
        // physicsSystem,
        iterpolateTransformSystem,
        renderSystem,
        pitRenderSystem
        // motionBlurSystem
    );

    requestAnimationFrame(() => render(world, pipeline));
}

function render(world: IWorld, pipeline: (...input: any[]) => any) {
    pipeline(world);

    requestAnimationFrame(() => render(world, pipeline));
}
