import { defineQuery, IWorld } from "bitecs";

import { Body } from "matter-js";
import {
    Player,
    CircleCollider,
    PlayerInput,
    vectorLength,
    IRoundsWorld,
    RoundState,
} from "..";

const FORCE = 0.0001;
const MAX_VELOCITY = 1.5;

export function createPlayerMovementSystem(world: IWorld) {
    const playerQuery = defineQuery([Player, CircleCollider, PlayerInput]);

    const {
        physics: { bodyByEntity },
    } = world as { physics: { bodyByEntity: Map<number, Body> } };

    return function playerMovementSystem(world: IWorld & IRoundsWorld): IWorld {
        if (world.rounds.state !== RoundState.InRound) {
            return world;
        }

        const players = playerQuery(world);

        for (const eid of players) {
            const body = bodyByEntity.get(eid);

            if (body) {
                Body.applyForce(body, body.position, {
                    x: PlayerInput.axes.x[eid] * FORCE,
                    y: PlayerInput.axes.y[eid] * FORCE,
                });
            }
        }

        return world;
    };
}
