class SymbolTable {
    private table: Map<string, number> = new Map();

    store(name: string, heapAddress: number) {
        this.table.set(name, heapAddress);
    }

    load(name: string): number {
        return this.table.get(name)!;
    }
}