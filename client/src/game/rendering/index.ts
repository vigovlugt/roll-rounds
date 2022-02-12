import { GlowFilter } from "pixi-filters";
import * as PIXI from "pixi.js";
import { Vector, WORLD_WIDTH, WORLD_HEIGHT, lighten } from "roll-rounds-shared";

export * from "./players";

export function createRenderer() {
    const app = new PIXI.Application({
        width: WORLD_WIDTH,
        height: WORLD_HEIGHT,
        backgroundColor: 0x050d10,
    });
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    PIXI.settings.ROUND_PIXELS = true;

    if (document.body.querySelector("canvas"))
        document.body.removeChild(document.body.querySelector("canvas")!);

    document.body.appendChild(app.view);

    return app;
}
