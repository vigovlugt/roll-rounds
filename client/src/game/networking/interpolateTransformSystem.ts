import { defineQuery, Not, addComponent, defineSystem, IWorld } from "bitecs";
import {
    Transform,
    Vector,
    vectorAdd,
    vectorLength,
    vectorMult,
    vectorSub,
} from "roll-rounds-shared";
import { NetworkTransform } from "roll-rounds-shared/src/networking/networkTransform";

const INTERPOLATION_PERCENTAGE = 0.3;

export function createInterpolateTransformSystem(world: IWorld) {
    const onlyNetworkTransformQuery = defineQuery([
        NetworkTransform,
        Not(Transform),
    ]);

    const networkTransformQuery = defineQuery([NetworkTransform, Transform]);

    return defineSystem((world: IWorld) => {
        const onlyTransforms = onlyNetworkTransformQuery(world);
        for (const eid of onlyTransforms) {
            addComponent(world, Transform, eid);
            console.log("ADD COMP EID", eid);
        }

        const networkTransforms = networkTransformQuery(world);
        for (const eid of networkTransforms) {
            const transform = {
                x: Transform.x[eid],
                y: Transform.y[eid],
            };
            const transformTarget = {
                x: NetworkTransform.x[eid],
                y: NetworkTransform.y[eid],
            };

            const newPos = interpolate(
                transform,
                transformTarget,
                INTERPOLATION_PERCENTAGE
            );

            if (newPos) {
                Transform.x[eid] = newPos.x;
                Transform.y[eid] = newPos.y;
            }
        }

        return world;
    });
}

function interpolate(position: Vector, target: Vector, percentage: number) {
    const directionVector = vectorSub(target, position);
    const distance = vectorLength(directionVector);

    if (distance > 0) {
        if (distance > 32) {
            return target;
        }

        const moveVector = vectorMult(directionVector, percentage);

        return vectorAdd(position, moveVector);
    }
}
