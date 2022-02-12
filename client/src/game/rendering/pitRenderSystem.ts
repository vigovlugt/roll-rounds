import { defineQuery, enterQuery, exitQuery, IWorld } from "bitecs";
import { GlowFilter } from "pixi-filters";
import { Application, DisplayObject, Graphics } from "pixi.js";
import { lighten, Pit, Transform } from "roll-rounds-shared";
import { IClientNetworkWorld } from "../networking";

export function createPitRenderSystem(renderer: Application) {
    const pitQuery = defineQuery([Pit, Transform]);
    const enteredPitQuery = enterQuery(pitQuery);
    const exitedPitQuery = exitQuery(pitQuery);

    const spriteByPit = new Map<number, DisplayObject>();

    renderer.stage.sortableChildren = true;

    return function renderSystem(world: IWorld & IClientNetworkWorld) {
        const enteredPits = enteredPitQuery(world);
        const exitedPits = exitedPitQuery(world);
        const pits = pitQuery(world);

        for (const eid of enteredPits) {
            const pit = createPit(Pit.size[eid]);
            spriteByPit.set(eid, pit);
            renderer.stage.addChild(pit);
        }

        for (const eid of exitedPits) {
            const sprite = spriteByPit.get(eid)!;
            renderer.stage.removeChild(sprite);
            spriteByPit.delete(eid);
        }

        for (const eid of pits) {
            const sprite = spriteByPit.get(eid)!;
            sprite.position.set(Transform.x[eid], Transform.y[eid]);
            sprite.position.set(Transform.x[eid], Transform.y[eid]);
        }

        return world;
    };
}

function createPit(size: number) {
    const graphics = new Graphics();

    graphics.beginFill(lighten(0xfe9c00, 1.5));
    graphics.drawCircle(0, 0, size);
    graphics.endFill();
    graphics.zIndex = -1;

    graphics.filters = [
        new GlowFilter({
            color: 0xfe9c00,
            distance: 8,
            outerStrength: 2,
            quality: 1,
        }),
    ];

    return graphics;
}
