import { Vector } from "..";
import { ICommand } from "./Command";
import { CommandType } from "./CommandType";
import { ICustomDataView, readVector2, writeVector2 } from "../serialization";

export interface IInputCommand extends ICommand {
    axes: Vector;
}

export function createInputCommand(axes: Vector): IInputCommand {
    return {
        type: CommandType.Input,
        axes,
    };
}

export function serializeInputCommand(
    view: ICustomDataView,
    cmd: IInputCommand
) {
    writeVector2(view, cmd.axes);
}

export function deserializeInputCommand(view: ICustomDataView): IInputCommand {
    const axes = readVector2(view);
    return createInputCommand(axes);
}
