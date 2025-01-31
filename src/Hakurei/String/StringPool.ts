import {VMString} from "./VMString";
import {MemoryManager} from "../MemoryManager/MemoryManager";

export class StringPool {
    private pool: Map<string, VMString> = new Map();

    constructor(private memoryManager: MemoryManager) {}

    getString(value: string): VMString {
        if (this.pool.has(value)) {
            return this.pool.get(value)!;
        }
        const newStr =new VMString(value);
        this.memoryManager.allocate(new VMString(value));
        this.pool.set(value, newStr);
        return newStr;
    }
}