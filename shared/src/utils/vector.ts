export interface Vector {
    x: number;
    y: number;
}

export function vectorLength({ x, y }: { x: number; y: number }) {
    return Math.sqrt(x ** 2 + y ** 2);
}

export function vectorNormalize({ x, y }: { x: number; y: number }) {
    const length = vectorLength({ x, y });

    return {
        x: x / length,
        y: y / length,
    };
}

export function vectorMult({ x, y }: { x: number; y: number }, n: number) {
    return {
        x: x * n,
        y: y * n,
    };
}

export function vectorEq(a: Vector, b: Vector) {
    return a.x == b.x && a.y == b.y;
}

export function vectorAdd(a: Vector, b: Vector) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
    };
}

export function vectorInv({ x, y }: Vector) {
    return {
        x: -x,
        y: -y,
    };
}

export function vectorSub(a: Vector, b: Vector) {
    return vectorAdd(a, vectorInv(b));
}
