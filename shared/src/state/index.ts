import { IWorld } from "bitecs";

export interface IGameState {
    round: number;
    players: number;
}

export interface IGameStateWorld {
    gameState: IGameState;
}

export function setupGameState(world: IWorld) {
    world.gameState = createGameState(0, 0);
}

export function createGameState(round: number, players: number): IGameState {
    return {
        round,
        players,
    };
}
