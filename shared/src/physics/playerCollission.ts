import { defineQuery, IWorld } from "bitecs";
import Matter, { Body, Vector } from "matter-js";
import { CircleCollider } from ".";
// @ts-ignore
import { Detector } from "matter-js";
import { Player } from "..";

const MIN_COLLISION_FORCE = 0.005;

export function createPlayerCollissionSystem() {
    const playerQuery = defineQuery([Player, CircleCollider]);

    return function playerCollissionSystem(world: IWorld): IWorld {
        const {
            physics: { bodyByEntity, engine },
        } = world as {
            physics: { bodyByEntity: Map<number, Body>; engine: Matter.Engine };
        };

        const players = playerQuery(world);

        const bodies = new Set(players.map((eid) => bodyByEntity.get(eid)?.id));

        const collissions = Detector.collisions((engine as any).detector);

        for (const collission of collissions) {
            if (
                !bodies.has(collission.bodyA.id) ||
                !bodies.has(collission.bodyB.id)
            ) {
                continue;
            }

            const force = Vector.mult(
                Vector.normalise(
                    Vector.sub(
                        collission.bodyA.position,
                        collission.bodyB.position
                    )
                ),
                MIN_COLLISION_FORCE
            );

            const force2 = Vector.mult(
                Vector.normalise(
                    Vector.sub(
                        collission.bodyB.position,
                        collission.bodyA.position
                    )
                ),
                MIN_COLLISION_FORCE
            );

            Body.setVelocity(collission.bodyA, Vector.create());
            Body.setVelocity(collission.bodyB, Vector.create());

            Body.applyForce(collission.bodyA, collission.bodyB.position, force);
            Body.applyForce(
                collission.bodyB,
                collission.bodyB.position,
                force2
            );
        }

        return world;
    };
}
