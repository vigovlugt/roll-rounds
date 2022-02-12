import { defineQuery, enterQuery, exitQuery, IWorld } from "bitecs";
import { GlowFilter, MotionBlurFilter } from "pixi-filters";
import { Application, DisplayObject, Graphics } from "pixi.js";
import { Transform, Player, lighten } from "roll-rounds-shared";
import { IClientNetworkWorld } from "../networking";

export function createRenderSystem(world: IWorld, renderer: Application) {
    const playerQuery = defineQuery([Player, Transform]);
    const enteredPlayerQuery = enterQuery(playerQuery);
    const exitedPlayerQuery = exitQuery(playerQuery);

    const spriteByPlayer = new Map<number, DisplayObject>();
    world.spriteByPlayer = spriteByPlayer;

    return function renderSystem(world: IWorld & IClientNetworkWorld) {
        const enteredPlayers = enteredPlayerQuery(world);
        const exitedPlayers = exitedPlayerQuery(world);
        const players = playerQuery(world);

        for (const eid of enteredPlayers) {
            const isLocal = world.playerEid === eid;
            spriteByPlayer.set(eid, createPlayerSprite(renderer, isLocal));
        }

        for (const player of exitedPlayers) {
            const sprite = spriteByPlayer.get(player)!;
            renderer.stage.removeChild(sprite);
            spriteByPlayer.delete(player);
        }

        for (const player of players) {
            const sprite = spriteByPlayer.get(player)!;

            sprite.position.set(Transform.x[player], Transform.y[player]);
        }

        return world;
    };
}

function createPlayerSprite(renderer: Application, isLocal: boolean) {
    const graphics = new Graphics();
    graphics.lineStyle(
        2,
        isLocal ? lighten(0x53b5ce, 2) : lighten(0xfe9c00, 12)
    );
    graphics.drawCircle(0, 0, 8);

    graphics.filters = [
        new GlowFilter({
            color: isLocal ? 0x53b5ce : 0xfe9c00,
            distance: 3,
            outerStrength: 2,
            quality: 1,
        }),
        new MotionBlurFilter([0, 0]),
    ];

    renderer.stage.addChild(graphics);

    return graphics;
}
