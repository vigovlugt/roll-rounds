import { defineQuery, defineSystem, IWorld } from "bitecs";
import { MotionBlurFilter } from "pixi-filters";
import { DisplayObject, Point } from "pixi.js";
import { CircleCollider, Player } from "roll-rounds-shared";
import { Body } from "matter-js";

const INTENSITY = 3;

export function createMotionBlurSystem(world: IWorld) {
    const query = defineQuery([Player, CircleCollider]);

    const {
        spriteByPlayer,
        physics: { bodyByEntity },
    } = world as {
        spriteByPlayer: Map<number, DisplayObject>;
        physics: { bodyByEntity: Map<number, Body> };
    };

    return defineSystem((world) => {
        const players = query(world);

        for (const eid of players) {
            const sprite = spriteByPlayer.get(eid);
            const body = bodyByEntity.get(eid);
            if (!sprite || !body) {
                continue;
            }

            (sprite.filters![1] as MotionBlurFilter).velocity = new Point(
                body.velocity.x * INTENSITY,
                body.velocity.y * INTENSITY
            );
        }

        return world;
    });
}
