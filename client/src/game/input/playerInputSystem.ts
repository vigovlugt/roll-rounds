import { defineSystem, IWorld } from "bitecs";
import {
    createCustomDataView,
    createInputCommand,
    PlayerInput,
    serializeCommand,
    Vector,
    vectorEq,
} from "roll-rounds-shared";
import { IClientNetworkWorld } from "../networking";

export function createPlayerInputSystem(world: IWorld & IClientNetworkWorld) {
    const { wsClient } = world;

    let lastInput: Vector | null = null;

    var pressedKeys = new Set();
    window.addEventListener("keydown", (e) => pressedKeys.add(e.key));
    window.addEventListener("keyup", (e) => pressedKeys.delete(e.key));

    return defineSystem((world: IWorld) => {
        if (!document.hasFocus() || wsClient.readyState !== wsClient.OPEN) {
            return world;
        }

        const gamePads = navigator.getGamepads();
        const gamePad = gamePads[0];

        let x = 0;
        let y = 0;

        if (gamePad && Math.abs(gamePad.axes[0]) > 0.15) x = gamePad.axes[0];

        if (gamePad && Math.abs(gamePad.axes[1]) > 0.15) y = gamePad.axes[1];

        if (pressedKeys.has("w")) y -= 1;
        if (pressedKeys.has("a")) x -= 1;
        if (pressedKeys.has("s")) y += 1;
        if (pressedKeys.has("d")) x += 1;

        const input = { x, y };

        if (lastInput == null || !vectorEq(lastInput, input)) {
            const inputCommand = createInputCommand({ x, y });

            const arrayBuffer = new ArrayBuffer(1000);
            const view = createCustomDataView(arrayBuffer);
            serializeCommand(view, inputCommand);

            wsClient.send(arrayBuffer.slice(0, view.pos));

            lastInput = input;
        }

        if (world.playerEid !== null) {
            PlayerInput.axes.x[world.playerEid] = input.x;
            PlayerInput.axes.y[world.playerEid] = input.y;
        }

        return world;
    });
}
