import { Vector } from "..";

export interface ICustomDataView {
    dataView: DataView;
    pos: number;
}

export function createCustomDataView(dataView: DataView | ArrayBuffer) {
    const view =
        dataView instanceof DataView ? dataView : new DataView(dataView);

    return {
        dataView: view,
        pos: 0,
    };
}

type DataViewWriteFn =
    | "setFloat32"
    | "setFloat64"
    | "setInt8"
    | "setInt16"
    | "setInt32"
    | "setUint8"
    | "setUint16"
    | "setUint32";

type DataViewReadFn =
    | "getFloat32"
    | "getFloat64"
    | "getInt8"
    | "getInt16"
    | "getInt32"
    | "getUint8"
    | "getUint16"
    | "getUint32";

function write(
    view: ICustomDataView,
    method: DataViewWriteFn,
    data: number,
    bytes: number
) {
    view.dataView[method](view.pos, data);
    view.pos += bytes;
}

function read(view: ICustomDataView, method: DataViewReadFn, bytes: number) {
    const data = view.dataView[method](view.pos);
    view.pos += bytes;

    return data;
}

// Built in write.
export function writeFloat32(view: ICustomDataView, n: number) {
    write(view, "setFloat32", n, 4);
}

export function writeFloat64(view: ICustomDataView, n: number) {
    write(view, "setFloat64", n, 8);
}

export function writeInt8(view: ICustomDataView, n: number) {
    write(view, "setInt8", n, 1);
}

export function writeInt16(view: ICustomDataView, n: number) {
    write(view, "setInt16", n, 2);
}

export function writeInt32(view: ICustomDataView, n: number) {
    write(view, "setInt32", n, 4);
}

export function writeUint8(view: ICustomDataView, n: number) {
    write(view, "setUint8", n, 1);
}

export function writeUint16(view: ICustomDataView, n: number) {
    write(view, "setUint16", n, 2);
}

export function writeUint32(view: ICustomDataView, n: number) {
    write(view, "setUint32", n, 4);
}

// Custom write.
export function writeVector2(view: ICustomDataView, vector: Vector) {
    writeFloat32(view, vector.x);
    writeFloat32(view, vector.y);
}

// Built in read.
export function readFloat32(view: ICustomDataView): number {
    return read(view, "getFloat32", 4);
}

export function readFloat64(view: ICustomDataView): number {
    return read(view, "getFloat64", 8);
}

export function readInt8(view: ICustomDataView): number {
    return read(view, "getInt8", 1);
}

export function readInt16(view: ICustomDataView): number {
    return read(view, "getInt16", 2);
}

export function readInt32(view: ICustomDataView): number {
    return read(view, "getInt32", 4);
}

export function readUint8(view: ICustomDataView): number {
    return read(view, "getUint8", 1);
}

export function readUint16(view: ICustomDataView): number {
    return read(view, "getUint16", 2);
}

export function readUint32(view: ICustomDataView): number {
    return read(view, "getUint32", 4);
}

// Custom read.
export function readVector2(view: ICustomDataView) {
    return {
        x: readFloat32(view),
        y: readFloat32(view),
    };
}
