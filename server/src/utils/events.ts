import { Emitter, EventType } from "mitt";

export class EventQueue<T> {
    queue: T[];

    constructor() {
        this.queue = [];
    }

    [Symbol.iterator]() {
        return {
            next: () =>
                this.queue.length > 0
                    ? {
                          value: this.queue.shift(),
                          done: false,
                      }
                    : {
                          done: true,
                      },
        };
    }

    push(...items: T[]) {
        this.queue.push(...items);
    }
}

export function createEventQueue<T>(
    events: Emitter<Record<EventType, unknown>>,
    type: any
) {
    const queue = new EventQueue<T>();

    events.on(type, (e: any) => queue.push(e));

    return queue;
}
