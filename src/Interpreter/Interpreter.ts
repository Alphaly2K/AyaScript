import { RuntimeMemory } from "./Memory";
import {
  FunctionSymbolTable,
  FunctionSymbolTableEntry,
  SymbolTable,
  VariableSymbolTable,
  VariableSymbolTableEntry,
} from "./SymbolTable";
import { Program } from "../AST/Program";
import { ASTNode } from "../AST/ASTNode";
import { SimpleLValue } from "../AST/LValue";
import { FunctionCall } from "../AST/FunctionCall";
import { Parameter } from "../AST/Parameter";
import {FuncProcessor} from "./Std";

let globalFunction: FunctionSymbolTable = new FunctionSymbolTable();
let globalVariable: VariableSymbolTable = new VariableSymbolTable();
let runtimeMemory: RuntimeMemory = new RuntimeMemory();
let exStdLib : FuncProcessor = new FuncProcessor();
export class Interpreter {
  private functionScope: FunctionSymbolTable = new FunctionSymbolTable();
  private variableScope: VariableSymbolTable = new VariableSymbolTable();
  private loopStack: Array<"LOOP" | "BREAK" | "CONTINUE"> = [];
  private returnValue: any = null;

  execute(ast: Program) {
    for (const node of ast.body) {
      this.evaluate(node);
    }
  }

  evaluate(node: ASTNode): any {
    switch (node.type) {
      case "IfStatement":
        if (this.evaluate(node.condition)) {
          this.evaluateBlock(node.thenBranch.body);
        } else if (node.elseBranch) {
          this.evaluateBlock(node.elseBranch.body);
        }
        break;

      case "String":
        return node.value;

      case "ExportStatement":
        if (node.body.type === "FunctionDeclaration") {
          globalFunction.addEntry(this.functionScope.lookup(node.body.name));
        }
        if (node.body.type === "SimpleLValue") {
          globalVariable.addEntry(this.variableScope.lookup(node.body.name));
        }
        break;


      case "WhileStatement":
        this.loopStack.push("LOOP");
        while (this.evaluate(node.condition)) {
          try {
            this.evaluateBlock(node.body.body);
          } catch (e) {
            if (e === "BREAK") break;
            if (e === "CONTINUE") continue;
            throw e;
          }
        }
        this.loopStack.pop();
        break;

      case "BreakStatement":
        throw "BREAK";

      case "ContinueStatement":
        throw "CONTINUE";

      case "FunctionDeclaration":
        this.functionScope.addEntry(node);
        return node.name;

      case "ReturnStatement":
        this.returnValue = this.evaluate(node.value);
        throw "RETURN";

      case "FunctionCall":
        return this.callFunction(node);

      case "VariableDeclaration":
        if (node.varType !== null) {
          // Explicit Variable Declaration
          if (node.value === null) {
            if (node.varType.isArray) {
              if (!node.varType.arraySize) {
                throw new Error(
                  "No size set for variable " +
                    node.name +
                    "(" +
                    node.varType.name +
                    "[])"
                );
              }
              const size = this.evaluate(node.varType.arraySize);
              if (typeof size !== "number") {
                throw new Error("The variable size must be a number");
              }
              const address = runtimeMemory.allocate(size);
              this.variableScope.addEntry({
                type: node.varType.name,
                name: node.name,
                isArray: true,
                memoryAddress: address,
              });
            } else {
              this.variableScope.addEntry({
                type: node.varType.name,
                name: node.name,
                isArray: false,
              });
            }
          } else {
            if (node.varType.isArray) {
              let address: number;
              let size: number;
              if (node.value.type === "ArrayList") {
                const valueArray = node.value.value;
                if (!node.varType.arraySize) {
                  size = valueArray.length;
                } else {
                  const tmp = this.evaluate(node.varType.arraySize);
                  if (typeof tmp !== "number") {
                    throw new Error("The variable size must be a number");
                  }
                  size = tmp;
                }
                address = runtimeMemory.allocate(size);
                valueArray.forEach((value, index) => {
                  runtimeMemory.set(address + index, this.evaluate(value));
                });
                this.variableScope.addEntry({
                  type: node.varType.name,
                  name: node.name,
                  isArray: true,
                  memoryAddress: address,
                });
              } else {
                throw new Error(
                  "The value cannot be assigned to a array variable "
                );
              }
            } else {
              this.variableScope.addEntry({
                type: node.varType.name,
                name: node.name,
                isArray: node.varType.isArray,
                value: this.evaluate(<ASTNode>node.value),
              });
            }
          }
        } else {
          // Variable Declaration With Type Inference
          if (node.value !== null) {
            if (node.value.type === "ArrayList") {
              const valueArray = node.value;
              const size = valueArray.value.length;
              const address = runtimeMemory.allocate(size);
              valueArray.value.forEach((value, index) => {
                runtimeMemory.set(address + index, this.evaluate(value));
              });
              this.variableScope.addEntry({
                type: typeof runtimeMemory.get(address),
                name: node.name,
                isArray: true,
                memoryAddress: address,
              });
            } else {
              this.variableScope.addEntry({
                type: (typeof this.evaluate(<ASTNode>node.value)).toString(),
                name: node.name,
                isArray: false,
                value: this.evaluate(<ASTNode>node.value),
              });
            }
          } else {
            throw new Error("Unrecognized type, no type inference available.");
          }
        }
        break;

      case "ArrayList":
        break;

      case "Integer":
        return node.value;

      case "Assignment":
        const target = this.evaluate(node.target);
        this.variableScope.updateValue(target, node.value);
        break;

      case "SimpleLValue":
        if (this.variableScope.hasEntry(node.name)) {
          return this.variableScope.lookup(node.name).value;
        }
        if (globalVariable.hasEntry(node.name)) {
          return globalVariable.lookup(node.name).value;
        }
        throw new Error("Unrecognized variable " + node.name);

      case "ArrayAccessLValue":
        const lvalue = node.array;
        const index = this.evaluate(node.index);
        if (typeof index !== "number") {
          throw new Error("The variable index must be a number");
        }
        if (lvalue.type === "SimpleLValue") {
          if (this.variableScope.hasEntry(lvalue.name)) {
            const value = this.variableScope.lookup(lvalue.name);
            if (!value.isArray)
              throw new Error("The variable must be an array");
            const address = <number>value.memoryAddress;
            return runtimeMemory.get(address + index);
          } else {
            if (globalVariable.hasEntry(lvalue.name)) {
              const value = globalVariable.lookup(lvalue.name);
              if (!value.isArray)
                throw new Error("The variable must be an array");
              const address = <number>value.memoryAddress;
              return runtimeMemory.get(address + index);
            } else {
              throw new Error("Unrecognized variable " + lvalue.name);
            }
          }
        }
        break;

      case "Literal":
        return node.value;

      case "BinaryExpression":
        switch (node.operator) {
          case "==":
            return this.evaluate(node.left) == this.evaluate(node.right);
          case "<=":
            return this.evaluate(node.left) <= this.evaluate(node.right);
          case ">=":
            return this.evaluate(node.left) >= this.evaluate(node.right);
          case "+":
            return this.evaluate(node.left) + this.evaluate(node.right);
          case "-":
            return this.evaluate(node.left) - this.evaluate(node.right);
          case "*":
            return this.evaluate(node.left) * this.evaluate(node.right);
          case "/":
            return this.evaluate(node.left) / this.evaluate(node.right);
          case "<":
            return this.evaluate(node.left) < this.evaluate(node.right);
          case ">":
            return this.evaluate(node.left) > this.evaluate(node.right);
          case "!=":
            return this.evaluate(node.left) != this.evaluate(node.right);
          case "%":
            return this.evaluate(node.left) % this.evaluate(node.right);
          case "||":
            return this.evaluate(node.left) || this.evaluate(node.right);
          case "&&":
            return this.evaluate(node.left) && this.evaluate(node.right);

          default:
            throw new Error("Unknown operator " + node.operator);
        }

      case "UnaryExpression":
        switch (node.operator) {
          case "!":
            return !this.evaluate(node.operand);
          case "++":
            try {
              // @ts-ignore
              const operand = this.resolveLValue(node.operand).name;
              const source = this.variableScope.lookup(operand).value;
              this.variableScope.updateValue(operand, source + 1);
              return source + 1;
            } catch (e: any) {
              throw new Error("Unrecognized variable: " + node.operand);
            }
          case "--":
            try {
              // @ts-ignore
              const operand = this.resolveLValue(node.operand).name;
              const source = this.variableScope.lookup(operand).value;
              this.variableScope.updateValue(operand, source - 1);
              return source - 1;
            } catch (e: any) {
              throw new Error("Unrecognized variable: " + node.operand);
            }

          default:
            throw new Error("Unrecognized operator " + node.operator);
        }
      default:
        throw new Error(`Unknown AST node type: ${node.type}`);
    }
  }

  resolveLValue(node: SimpleLValue): VariableSymbolTableEntry {
    if (this.variableScope.hasEntry(node.name)) {
      return this.variableScope.lookup(node.name);
    }
    if (globalVariable.hasEntry(node.name)) {
      return globalVariable.lookup(node.name);
    }
    throw new Error("Unrecognized variable " + node.name);
  }

  callFunction(node: FunctionCall): any {
    if(exStdLib.has(node.name))
    {
      let args: any[] = [];
      node.arguments.forEach((arg: ASTNode) => {
        args.push(this.evaluate(arg));
      })
      exStdLib.execute(node.name,args);
      return;
    }
    const func = this.functionScope.hasEntry(node.name)
      ? this.functionScope.lookup(node.name)
      : globalFunction.lookup(node.name);
    if (!func) {
      throw new Error(`Function '${node.name}' not found.`);
    }
    const preScope = this.variableScope;
    func.params.forEach((param: Parameter, index: number) => {
      const paramName = param.name;
      this.variableScope.addEntryFuncParam(
        paramName,
        this.evaluate(node.arguments[index])
      );
    });

    try {
      for (const stmt of func.body.body) {
        this.evaluate(stmt);
      }
    } catch (e: any) {
      if (e != "RETURN") {
        throw new Error(
          `Error while executing function '${node.name}': ${e.message}`
        );
      }
    }
    if (this.returnValue === null && func.returnType != "void") {
      throw new Error("Function '" + func.returnType + "' not found.");
    }
    const returnValue = this.returnValue;
    this.returnValue = null;
    this.variableScope = preScope;
    return returnValue;
  }

  evaluateBlock(block: ASTNode[]): void {
    for (const stmt of block) {
      this.evaluate(stmt);
    }
  }
}
