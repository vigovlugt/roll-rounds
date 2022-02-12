import { defineQuery, defineSystem, IWorld } from "bitecs";
import { Player } from "roll-rounds-shared";
import { IGameStateWorld } from "../state";

export enum RoundState {
    Waiting,
    CountDown,
    InRound,
}

export interface IRoundsWorld {
    rounds: {
        state: RoundState;
        currentCountDown: number;
    };
}

const COUNT_DOWN = 5000;

export function createRoundSystem(world: IWorld & IRoundsWorld) {
    const playerQuery = defineQuery([Player]);

    world.rounds = {
        state: RoundState.Waiting,
        currentCountDown: 0,
    };

    return (world: IWorld & IRoundsWorld & IGameStateWorld) => {
        const players = playerQuery(world);

        switch (world.rounds.state) {
            case RoundState.Waiting:
                if (players.length > 1) {
                    world.rounds.state = RoundState.CountDown;
                    world.rounds.currentCountDown = COUNT_DOWN;
                    world.gameState.round++;
                }

                break;

            case RoundState.CountDown:
                world.rounds.currentCountDown -= world.time.delta;

                console.log(world.rounds.currentCountDown);
                if (world.rounds.currentCountDown <= 0) {
                    world.rounds.state = RoundState.InRound;
                }
                break;

            case RoundState.InRound:
                if (players.length < 2) {
                    world.rounds.state = RoundState.CountDown;
                    world.rounds.currentCountDown = COUNT_DOWN;
                    world.gameState.round++;
                }

                if (world.gameState.players < 2) {
                    world.rounds.state = RoundState.Waiting;
                }
                break;
        }

        return world;
    };
}
