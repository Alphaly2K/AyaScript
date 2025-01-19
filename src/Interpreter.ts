import {ASTNode, FunctionCall, Parameter, Program, SendStatement} from "./AST/AST";

export class Interpreter {
    private globalSymbolTable: Record<string, any> = {};
    private currentScope: Record<string, any> = {};
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
                this.globalSymbolTable[node.name] = node;
                break;

            case "ReturnStatement":
                this.returnValue = this.evaluate(node.value);
                throw "RETURN";

            case "FunctionCall":
                return this.callFunction(node);

            case "VariableDeclaration":
                this.currentScope[node.name] = node.value ? this.evaluate(node.value) : undefined;
                break;

            case "Integer":
                return node.value;

            case "Assignment":
                const target = node.target.name;
                this.currentScope[target] = node.value;
                break;

            case "Variable":
                // @ts-ignore
                if (this.currentScope[node.name]) {
                    // @ts-ignore
                    return this.currentScope[node.name];
                }
                // @ts-ignore
                if (this.globalSymbolTable[node.name]) {
                    // @ts-ignore
                    return this.globalSymbolTable[node.name];
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
                            this.currentScope[node.operand.name]++;

                            // @ts-ignore
                            return this.currentScope[node.operand.name];
                        } catch (e: any) {
                            throw new Error("Unrecognized variable: " + node.operand);
                        }
                    case "--":
                        try {
                            // @ts-ignore
                            this.currentScope[node.operand.name]--;
                            // @ts-ignore
                            return this.currentScope[node.operand.name];
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
        const func = this.globalSymbolTable[node.name];
        if (!func) {
            throw new Error(`Function '${node.name}' not found.`);
        }
        func.params.forEach((param: Parameter, index: number) => {
            const paramName = param.name;
            this.currentScope[paramName] = this.evaluate(node.arguments[index]);
        });

        let result: any = undefined;
        try {
            for (const stmt of func.body.body) {
                result = this.evaluate(stmt);
                console.log(result);
                if (result !== undefined && result.type === 'ReturnStatement') {
                    return result.value;
                }
            }
        } catch (e: any) {
            throw new Error(`Error while executing function '${node.name}': ${e.message}`);
        }

        // 如果没有返回值，默认返回 undefined
        return result;
    }


    evaluateBlock(block: ASTNode[]): void {
        for (const stmt of block) {
            this.evaluate(stmt);
        }
    }
}
