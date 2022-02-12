import { defineQuery, defineSystem, IWorld, removeEntity } from "bitecs";
import { Body } from "matter-js";
import { Pit } from "roll-rounds-shared/src/pits";
import { Player, Transform, vectorLength, vectorSub } from "roll-rounds-shared";
import { createPlayer, killPlayer } from "../players/playerSpawnSystem";
import { INetworkWorld } from "../networking";

export function createPitDamageSystem(world: IWorld & INetworkWorld) {
    const pitQuery = defineQuery([Pit]);
    const playerQuery = defineQuery([Player]);

    const {
        physics: { bodyByEntity },
    } = world;

    return defineSystem((world: IWorld) => {
        const players = playerQuery(world);
        const pits = pitQuery(world);

        for (const playerId of players) {
            const playerTransform = {
                x: Transform.x[playerId],
                y: Transform.y[playerId],
            };

            const body = bodyByEntity.get(playerId)!;
            if (!body) {
                continue;
            }

            for (const pitId of pits) {
                const pitTransform = {
                    x: Transform.x[pitId],
                    y: Transform.y[pitId],
                };

                const distanceVector = vectorSub(pitTransform, playerTransform);
                const distance = vectorLength(distanceVector);

                if (distance < 48) {
                    // Transform.x[playerId] = WORLD_WIDTH / 2;
                    // Transform.y[playerId] = WORLD_HEIGHT / 2;
                    const connectionId = Player.id[playerId];

                    killPlayer(world as IWorld & INetworkWorld, connectionId);
                    setTimeout(() => {
                        createPlayer(
                            world as any,
                            { x: 100, y: 100 },
                            connectionId
                        );
                    }, 50);

                    // Body.setVelocity(body, Vector.create());
                }
            }
        }

        return world;
    });
}
