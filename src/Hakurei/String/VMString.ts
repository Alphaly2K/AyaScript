export class VMString {
    id: number | undefined;
    value: string;
    refCount: number = 0;
    length: number;

    constructor(value: string) {
        this.value = value;
        this.length = value.length;
    }
    toString() {
        return this.value;
    }
    toProcessedArray() {
        let processedArray:number[] = [];
        for(let i =0;i<this.length;i++) {
            processedArray.push(this.value.charCodeAt(i));
        }
        return processedArray;
    }
}