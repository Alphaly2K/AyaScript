import {
    ASTNode,
    FunctionCall,
    FunctionDeclaration,
    LValue,
    Parameter,
    Program,
    SendStatement,
    SimpleLValue
} from "./AST/AST";
import {RuntimeMemory} from "./Memory";
import {
    FunctionSymbolTable,
    FunctionSymbolTableEntry,
    SymbolTable,
    VariableSymbolTable,
    VariableSymbolTableEntry
} from "./SymbolTable";


let globalFunction: FunctionSymbolTable = new FunctionSymbolTable();
let globalVariable: VariableSymbolTable = new VariableSymbolTable();
let runtimeMemory: RuntimeMemory = new RuntimeMemory();
export class Interpreter {
    private functionScope: FunctionSymbolTable = new FunctionSymbolTable();
    private variableScope: VariableSymbolTable = new VariableSymbolTable();
    private loopStack: Array<"LOOP" | "BREAK" | "CONTINUE"> = [];
    private returnValue: any = null;
    private output: string[] = [];

    execute(ast: Program): string[] {
        this.output = [];
        for (const node of ast.body) {
            this.evaluate(node);
        }
        return this.output;
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

            case "ExportStatement":
                if (node.body.type === "FunctionDeclaration") {
                    globalFunction.addEntry(this.functionScope.lookup(node.body.name))
                }
                if (node.body.type === "SimpleLValue") {
                    globalVariable.addEntry(this.variableScope.lookup(node.body.name));
                }
                break
            case "SendStatement":
                this.send(node);
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
                this.functionScope.addEntry(node)
                return node.name;

            case "ReturnStatement":
                this.returnValue = this.evaluate(node.value);
                throw "RETURN";

            case "FunctionCall":
                return this.callFunction(node);

            case "VariableDeclaration":
                if (node.value) {
                    this.variableScope.addEntry({type: (typeof this.evaluate(node.value)).toString(), name: node.name, isArray: false, value: this.evaluate(node.value)});
                }
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
                            const operand = this.resolveLValue(node.operand).name
                            const source = this.variableScope.lookup(operand).value;
                            this.variableScope.updateValue(operand, source + 1);
                            return source + 1;
                        } catch (e: any) {
                            throw new Error("Unrecognized variable: " + node.operand);
                        }
                    case "--":
                        try {
                            // @ts-ignore
                            const operand = this.resolveLValue(node.operand).name
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

    send(node: SendStatement): any {
        console.log(this.evaluate(node.body));
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
        const func = this.functionScope.hasEntry(node.name) ? this.functionScope.lookup(node.name) : globalFunction.lookup(node.name);
        if (!func) {
            throw new Error(`Function '${node.name}' not found.`);
        }
        const preScope = this.variableScope;
        func.params.forEach((param: Parameter, index: number) => {
            const paramName = param.name;
            this.variableScope.addEntryFuncParam(paramName,this.evaluate(node.arguments[index])) ;
        });

        try {
            for (const stmt of func.body.body) {
                this.evaluate(stmt);
            }
        } catch (e: any) {
            if (e != "RETURN") {
                throw new Error(`Error while executing function '${node.name}': ${e.message}`);
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
