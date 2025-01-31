import {VMString} from "../String/VMString";
import {VMValue} from "../Type/VMValue";
import {VMNumber} from "../Number/VMNumber";

export class MemoryManager {
    private heap: Map<number, VMValue> = new Map();
    private nextId = 0;

    allocate(value: VMValue): number {
        const id = this.nextId++;
        if (value instanceof VMString) {
            value.id = id;
            value.refCount = 1;
        }
        this.heap.set(id, value);
        return id;
    }

    freeString(str: VMString) {
        if (str.refCount <= 0) {
            this.heap.delete(str.id);
        }
    }

    getAllocatedStrings(): VMString[] {
        const raw = Array.from(this.heap.values());
        let result: VMString[] = [];
        raw.forEach((v: VMValue) => {
            if(v instanceof VMString) {
                result.push(v);
            }
        });
        return result;
    }

    getValue(id: number){
        const raw = this.heap.get(id);
        if(raw instanceof VMNumber){
            return raw.value;
        }
        throw new Error(`${id} is not a number`);
    }
}