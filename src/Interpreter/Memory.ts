export type Memory = {
  [address: number]: any;
};

export class RuntimeMemory {
  private memory: Memory;
  private nextAddress: number;

  constructor() {
    this.memory = {};
    this.nextAddress = 0;
  }

  allocate(size: number): number {
    const startAddress = this.nextAddress;
    this.nextAddress += size;
    return startAddress;
  }

  set(address: number, value: any) {
    this.memory[address] = value;
  }

  get(address: number): any {
    if (!(address in this.memory)) {
      throw new Error(`Invalid memory access at address: ${address}`);
    }
    return this.memory[address];
  }

  dump() {
    console.log(this.memory);
  }
}
