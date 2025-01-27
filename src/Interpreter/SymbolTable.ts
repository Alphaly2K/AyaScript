import { FunctionDeclaration } from "../AST/FunctionDeclaration";

export type SymbolTable = FunctionSymbolTable | VariableSymbolTable;
export type VariableSymbolTableEntry = {
  name: string; // 变量名
  type: string; // 数据类型
  isArray: boolean; // 是否是数组
  dimensions?: number[]; // 数组的维度，仅数组需要
  memoryAddress?: number; // 内存地址，仅数组和结构体需要
  value?: any; // 标量变量的直接值
};
export class VariableSymbolTable {
  private table: Map<string, VariableSymbolTableEntry>;

  constructor() {
    this.table = new Map();
  }

  addEntry(entry: VariableSymbolTableEntry) {
    if (this.table.has(entry.name)) {
      throw new Error(`Duplicate variable declaration: ${entry.name}`);
    }
    this.table.set(entry.name, entry);
  }
  addEntryNV(name: string, value: any, isArray: boolean = false) {
    if (this.table.has(name)) {
      throw new Error(`Duplicate variable declaration: ${name}`);
    }
    this.table.set(name, {
      name: name,
      isArray: isArray,
      type: (typeof value).toString(),
    });
  }

  addEntryFuncParam(
    name: string,
    value?: any,
    isArray: boolean = false,
    memoryAddress?: number
  ) {
    this.table.set(name, {
      name: name,
      isArray: isArray,
      type: (typeof value).toString(),
      value,
      memoryAddress,
    });
  }

  hasEntry(entry: string) {
    return this.table.has(entry);
  }

  lookup(name: string): VariableSymbolTableEntry {
    return <VariableSymbolTableEntry>this.table.get(name);
  }

  updateValue(name: string, value: any) {
    const entry = this.table.get(name);
    if (!entry) {
      throw new Error(`Undefined variable: ${name}`);
    }
    if (entry.isArray) {
      throw new Error(`Cannot directly assign value to an array: ${name}`);
    }
    entry.value = value;
  }
}
export type FunctionSymbolTableEntry = FunctionDeclaration;
export class FunctionSymbolTable {
  private table: Map<string, FunctionSymbolTableEntry>;

  constructor() {
    this.table = new Map();
  }

  addEntry(entry: FunctionSymbolTableEntry) {
    if (this.table.has(entry.name)) {
      throw new Error(`Duplicate function declaration: ${entry.name}`);
    }
    this.table.set(entry.name, entry);
  }
  hasEntry(entry: string): boolean {
    return this.table.has(entry);
  }
  lookup(name: string): FunctionSymbolTableEntry {
    const entry = this.table.get(name);
    if (typeof entry !== "undefined") {
      return <FunctionDeclaration>this.table.get(name);
    }
    throw new Error(`No function declaration: ${name}`);
  }
}
