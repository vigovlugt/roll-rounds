import { CircleCollider, Player, PlayerInput } from "..";
import { Pit } from "../pits";
import { NetworkSync } from "../networking";
import { NetworkTransform } from "../networking/networkTransform";

export * from "./CustomDataView";
export * from "./gameStateSerializer";

export const serializationConfig = [
    NetworkTransform,
    Player,
    CircleCollider,
    PlayerInput,
    NetworkSync,
    Pit,
];
