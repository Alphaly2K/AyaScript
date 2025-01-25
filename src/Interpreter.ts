import {ASTNode, FunctionCall, Parameter, Program, SendStatement} from "./AST/AST";


let globalFunction: Record<string, any> = {};
let globalVariable: Record<string, any> = {};
let globalSymbolTable: Record<string, Record<string, any>> = {"FUNCTION": globalFunction, "VAR": globalVariable};

export class Interpreter {
    private functionScope: Record<string, any> = {};
    private variableScope: Record<string, any> = {};
    private currentScope: Record<string, Record<string, any>> =
        {
            "FUNCTION": this.functionScope,
            "VAR": this.variableScope,
        };
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
                const value = this.evaluate(node.body);
                if (node.body.type === "FunctionDeclaration") {
                    globalSymbolTable["FUNCTION"][value] = this.currentScope["FUNCTION"][value];
                }
                if (node.body.type === "Variable") {
                    globalSymbolTable["VAR"][value] = this.currentScope["VAR"][value];
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
                this.currentScope["FUNCTION"][node.name] = node;
                return node.name;

            case "ReturnStatement":
                this.returnValue = this.evaluate(node.value);
                throw "RETURN";

            case "FunctionCall":
                return this.callFunction(node);

            case "VariableDeclaration":
                this.currentScope["VAR"][node.name] = node.value ? this.evaluate(node.value) : undefined;
                break;

            case "Integer":
                return node.value;

            case "Assignment":
                const target = node.target.name;
                this.currentScope[target] = node.value;
                break;

            case "Variable":
                // @ts-ignore
                if (this.currentScope["VAR"][node.name]) {
                    // @ts-ignore
                    return this.currentScope["VAR"][node.name];
                }
                // @ts-ignore
                if (this.globalSymbolTable["VAR"][node.name]) {
                    // @ts-ignore
                    return this.globalSymbolTable["VAR"][node.name];
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
                            this.currentScope["VAR"][node.operand.name]++;

                            // @ts-ignore
                            return this.currentScope["VAR"][node.operand.name];
                        } catch (e: any) {
                            throw new Error("Unrecognized variable: " + node.operand);
                        }
                    case "--":
                        try {
                            // @ts-ignore
                            this.currentScope["VAR"][node.operand.name]--;
                            // @ts-ignore
                            return this.currentScope["VAR"][node.operand.name];
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

    callFunction(node: FunctionCall): any {
        const func = this.currentScope["FUNCTION"][node.name] ? this.currentScope["FUNCTION"][node.name] : globalSymbolTable["FUNCTION"][node.name];
        if (!func) {
            throw new Error(`Function '${node.name}' not found.`);
        }
        const preScope = this.currentScope;
        func.params.forEach((param: Parameter, index: number) => {
            const paramName = param.name;
            this.currentScope["VAR"][paramName] = this.evaluate(node.arguments[index]);
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
        this.currentScope = preScope;
        return returnValue;
    }


    evaluateBlock(block: ASTNode[]): void {
        for (const stmt of block) {
            this.evaluate(stmt);
        }
    }
}
