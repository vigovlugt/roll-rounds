import {
    createTimeSystem,
    createPlayerMovementSystem,
    createPlayerCollissionSystem,
    createPhysicsSystem,
    setupGameState,
    IGameStateWorld,
    createRoundSystem,
    IRoundsWorld,
} from "roll-rounds-shared";
import { INetworkWorld, setupNetworkWorld, setupWsServer } from "./networking";
import { createWorld, IWorld, pipe } from "bitecs";
import { IEventWorld, setupEventQueue } from "./events";
import { createNetworkSyncSystem } from "./networking/networkSyncSystem";
import { createPlayerSpawnSystem } from "./players/playerSpawnSystem";
import { setupNetworkMessageHandler } from "./networking/networkMessageHandler";
import { createPlayerInputSystem } from "./players/playerInputSystem";
import { setupPits } from "./pits";
import { createPitDamageSystem } from "./pits/pitDamageSystem";

const UPDATE = 1 / 60;

function main() {
    const world: IWorld &
        IEventWorld &
        INetworkWorld &
        IGameStateWorld &
        IRoundsWorld = createWorld();
    setupGameState(world);
    setupEventQueue(world);
    setupNetworkWorld(world);
    setupWsServer(world);
    setupNetworkMessageHandler(world as any);

    setupPits(world);

    const timeSystem = createTimeSystem(world);
    const roundSystem = createRoundSystem(world);
    const physicsSystem = createPhysicsSystem(world);
    const networkSyncSystem = createNetworkSyncSystem(world);
    const playerSpawnSystem = createPlayerSpawnSystem(world);
    const playerInputSystem = createPlayerInputSystem(world);
    const playerMovementSystem = createPlayerMovementSystem(world);
    const playerCollissionSystem = createPlayerCollissionSystem();
    const playerDamageSystem = createPitDamageSystem(world);

    const pipeline = pipe(
        timeSystem,
        roundSystem,
        playerSpawnSystem,
        playerInputSystem,
        playerMovementSystem,
        playerCollissionSystem,
        playerDamageSystem,
        physicsSystem,
        networkSyncSystem
    );

    update(world, pipeline);
}

function update(world: IWorld, pipeline: (input: IWorld) => IWorld) {
    pipeline(world);

    setTimeout(() => update(world, pipeline), UPDATE * 1000);
}

main();
