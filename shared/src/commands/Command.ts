import {
    deserializeInputCommand,
    IInputCommand,
    serializeInputCommand,
} from ".";
import { ICustomDataView, readUint8, writeUint8 } from "..";
import { CommandType } from "./CommandType";

export interface ICommand {
    type: CommandType;
}

export function serializeCommand(view: ICustomDataView, cmd: ICommand) {
    writeUint8(view, cmd.type);
    switch (cmd.type) {
        case CommandType.Input:
            serializeInputCommand(view, cmd as IInputCommand);
            break;

        default:
            throw new Error(
                "Command type " + cmd.type + " not recognized while serializing"
            );
    }
}

export function deserializeCommand(view: ICustomDataView): ICommand {
    const type = readUint8(view);

    switch (type) {
        case CommandType.Input:
            return deserializeInputCommand(view);

        default:
            throw new Error(
                "Command type " + type + " not recognized while deserializing"
            );
    }
}
