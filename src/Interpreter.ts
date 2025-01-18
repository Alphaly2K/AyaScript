import {ASTNode, FunctionCall, LValue, Parameter, Program, SendStatement} from "./AST/AST";

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
                const target = this.resolveLValue(node.target);
                target.scope[target.key] = this.evaluate(node.value);
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

            case "LValue":
                const resolved = this.resolveLValue(node);
                return resolved.scope[resolved.key];

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
                        return !this.evaluate(node.value);
                    default:
                        throw new Error("Unrecognized operator " + node.operator);
                }
            case "UnaryExpressionWithSideEffect":
                switch (node.operator) {
                    case "++":
                        try {
                            // @ts-ignore
                            this.currentScope[node.value.name]++;
                            // @ts-ignore
                            return this.currentScope[node.value.name];
                        } catch (e: any) {
                            throw new Error("Unrecognized variable: " + node.value);
                        }
                    case "--":
                        try {
                            // @ts-ignore
                            this.currentScope[node.value.name]--;
                            // @ts-ignore
                            return this.currentScope[node.value.name];
                        } catch (e: any) {
                            throw new Error("Unrecognized variable: " + node.value);
                        }
                    default:
                        throw new Error("Unrecognized variable " + node.operator);
                }
            default:
                throw new Error(`Unknown AST node type: ${node.type}`);
        }
    }

    send(node: SendStatement): any {
        const value = node.body;
        // @ts-ignore
        console.log(value.value);
    }

    callFunction(node: FunctionCall): any {
        // 1. 查找函数定义
        const func = this.globalSymbolTable[node.name];
        if (!func) {
            throw new Error(`Function '${node.name}' not found.`);
        }
        // 2. 创建局部符号表并绑定参数
        func.params.forEach((param: Parameter, index: number) => {
            const paramName = param.name;
            const paramValue = node.arguments[index];
            this.currentScope[paramName] = paramValue;
        });

        // 3. 执行函数体
        // 设置当前局部符号表
        let result: any = undefined;

        // 假设函数体是一个 AST 语句块
        try {
            for (const stmt of func.body.body) {
                result = this.evaluate(stmt);  // 递归执行函数体中的每个语句
                if (result !== undefined && result.type === 'return') {
                    return result.value;  // 如果遇到 return 语句，返回值
                }
            }
        } catch (e: any) {
            throw new Error(`Error while executing function '${node.name}': ${e.message}`);
        }

        // 如果没有返回值，默认返回 undefined
        return result;
    }

    resolveLValue(lvalue: LValue): { scope: Record<string, any>; key: string } {
        let scope = this.currentScope;
        let key = lvalue.name;

        if (!(key in scope)) {
            scope = this.globalSymbolTable;
            if (!(key in scope)) {
                throw new Error(`Variable ${key} is not defined`);
            }
        }

        return {scope, key};
    }

    evaluateBlock(block: ASTNode[]): void {
        for (const stmt of block) {
            this.evaluate(stmt);
        }
    }
}
