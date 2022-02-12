import { addComponent, addEntity, IWorld } from "bitecs";
import { Pit, Transform, WORLD_HEIGHT, WORLD_WIDTH } from "roll-rounds-shared";
import { NetworkSync } from "roll-rounds-shared/src/networking";
import { NetworkTransform } from "roll-rounds-shared/src/networking/networkTransform";

export function setupPits(world: IWorld) {
    const positions = [
        [0, 0],
        [0, WORLD_HEIGHT],
        [WORLD_WIDTH, 0],
        [WORLD_WIDTH, WORLD_HEIGHT],
    ];

    for (const [x, y] of positions) {
        const eid = addEntity(world);

        addComponent(world, Transform, eid);
        addComponent(world, Pit, eid);
        addComponent(world, NetworkSync, eid);
        addComponent(world, NetworkTransform, eid);

        Pit.size[eid] = 48;
        Transform.x[eid] = x;
        Transform.y[eid] = y;
    }
}
