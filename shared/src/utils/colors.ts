export function lighten(color: number, percentage: number) {
    const r = Math.round(Math.min(((color >> 16) & 0xff) * percentage, 0xff));
    const g = Math.round(Math.min(((color >> 8) & 0xff) * percentage, 0xff));
    const b = Math.round(Math.min((color & 0xff) * percentage, 0xff));
    console.log(r, g, b);

    return (r << 16) + (g << 8) + b;
}
