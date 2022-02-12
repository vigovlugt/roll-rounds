import {
    createCustomDataView,
    ICustomDataView,
    readUint8,
    writeUint8,
} from ".";
import { createGameState, IGameState } from "..";

export function serializeGameState(gameState: IGameState) {
    const buffer = new ArrayBuffer(1024);
    const view = createCustomDataView(buffer);

    writeUint8(view, gameState.round);
    writeUint8(view, gameState.players);

    return buffer.slice(0, view.pos);
}

export function deserializeGameState(view: ICustomDataView) {
    return createGameState(readUint8(view), readUint8(view));
}
