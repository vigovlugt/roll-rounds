import { defineComponent, Types } from "bitecs";

export * from "./playerInput";

export const Player = defineComponent({ id: Types.ui8, dead: Types.ui8 });
