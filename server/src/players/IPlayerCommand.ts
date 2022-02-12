import { ICommand } from "roll-rounds-shared";

export interface IPlayerCommand<T extends ICommand> {
    playerId: number;
    command: T;
}

export function createPlayerCommand<T extends ICommand>(
    playerId: number,
    command: T
): IPlayerCommand<T> {
    return {
        playerId,
        command,
    };
}
