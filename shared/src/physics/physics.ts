import { defineQuery, enterQuery, exitQuery, IWorld } from "bitecs";
import Matter from "matter-js";
import {
    Bodies,
    Body,
    Engine,
    IChamferableBodyDefinition,
    Runner,
    World,
} from "matter-js";
import { CircleCollider, Transform } from ".";
import { IRoundsWorld, RoundState } from "..";

export function createPhysicsSystem(world: IWorld) {
    const engine = Engine.create({ gravity: { y: 0 }, velocityIterations: 6 });
    (Matter as any).Resolver._restingThresh = 0.01;
    const bodyByEntity = new Map<number, Body>();

    world.physics = { engine, bodyByEntity };

    const circleColliderQuery = defineQuery([CircleCollider, Transform]);
    const enteredCircleColliderQuery = enterQuery(circleColliderQuery);
    const exitedCircleColliderQuery = exitQuery(circleColliderQuery);

    createBounds(engine, 1366 / 4, 768 / 4);

    return (world: IWorld & IRoundsWorld) => {
        const {
            time: { delta },
        } = world;

        const circleColliders = circleColliderQuery(world);
        const enteredCircleColliders = enteredCircleColliderQuery(world);
        const exitedCircleColliders = exitedCircleColliderQuery(world);

        for (const entity of enteredCircleColliders) {
            const body = Bodies.circle(
                Transform.x[entity],
                Transform.y[entity],
                CircleCollider.radius[entity],
                {
                    mass: 1,
                    frictionAir: 0,
                    friction: 0,
                    frictionStatic: 0,
                    restitution: 0.5,
                    inertia: Infinity,
                    slop: 0.01,
                },
                64
            );

            World.add(engine.world, body);

            bodyByEntity.set(entity, body);
        }

        for (const entity of exitedCircleColliders) {
            const body = bodyByEntity.get(entity)!;
            World.remove(engine.world, body);
            bodyByEntity.delete(entity);
        }

        for (const eid of circleColliders) {
            const body = bodyByEntity.get(eid)!;

            if (
                Transform.x[eid] !== body.position.x ||
                Transform.y[eid] !== body.position.y
            ) {
                Body.setPosition(body, {
                    x: Transform.x[eid],
                    y: Transform.y[eid],
                });
            }
        }

        if (world.rounds.state == RoundState.InRound) {
            Engine.update(engine, delta, 1);
        }

        for (const eid of circleColliders) {
            const body = bodyByEntity.get(eid)!;

            if (
                Transform.x[eid] !== body.position.x ||
                Transform.y[eid] !== body.position.y
            ) {
                Transform.x[eid] = body.position.x;
                Transform.y[eid] = body.position.y;
            }
        }

        return world;
    };
}

function createBounds(engine: Engine, width: number, height: number) {
    const bodySettings: IChamferableBodyDefinition = {
        isStatic: true,
        restitution: 1,
        inertia: Infinity,
    };

    const SIZE = 100;
    const HALF_SIZE = SIZE / 2;
    const bodyUp = Bodies.rectangle(
        width / 2,
        -HALF_SIZE,
        width,
        SIZE,
        bodySettings
    );
    World.add(engine.world, bodyUp);
    bodyUp.restitution = 0.5;

    const bodyDown = Bodies.rectangle(
        width / 2,
        height + HALF_SIZE,
        width,
        SIZE,
        bodySettings
    );
    World.add(engine.world, bodyDown);
    bodyDown.restitution = 0.5;

    const bodyRight = Bodies.rectangle(
        -HALF_SIZE,
        height / 2,
        SIZE,
        height,
        bodySettings
    );
    World.add(engine.world, bodyRight);
    bodyRight.restitution = 0.5;

    const bodyLeft = Bodies.rectangle(
        width + HALF_SIZE,
        height / 2,
        SIZE,
        height,
        bodySettings
    );
    World.add(engine.world, bodyLeft);
    bodyLeft.restitution = 0.5;
}
