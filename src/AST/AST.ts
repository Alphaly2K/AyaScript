export type ASTNode =
    | Program
    | VariableDeclaration
    | FunctionDeclaration
    | Assignment
    | FunctionCall
    | IfStatement
    | WhileStatement
    | ReturnStatement
    | BreakStatement
    | ContinueStatement
    | SendStatement
    | Block
    | BinaryExpression
    | UnaryExpression
    | Variable
    | Parameter
    | Integer
    | Literal
    ;

export interface Program {
    type: "Program";
    body: ASTNode[]; // 所有语句组成的程序主体
}

export interface UnaryExpression {
    type: "UnaryExpression";
    operator: string;
    operand: ASTNode;
}

export interface Integer {
    type: "Integer";
    value: number;
}

export interface Variable {
    type: "Variable";
    name: string;
}

export interface SendStatement {
    type: "SendStatement";
    body: ASTNode;
}

export interface VariableDeclaration {
    type: "VariableDeclaration";
    name: string; // 变量名
    value: ASTNode | null; // 可选的初始值
}

export interface BinaryExpression {
    type: "BinaryExpression";
    operator: string; // 操作符，如 "+", "-", "*", "/", "==", ">", "<", 等
    left: ASTNode; // 左侧操作数
    right: ASTNode; // 右侧操作数
}


export interface FunctionDeclaration {
    type: "FunctionDeclaration";
    name: string; // 函数名
    params: Parameter[]; // 参数列表
    returnType: string; // 返回值类型
    body: Block; // 函数体
}

// 函数参数
export interface Parameter {
    type: "Parameter";
    name: string; // 参数名
    paramType: string; // 参数类型
}


export interface Assignment {
    type: "Assignment";
    target: Variable; // 赋值目标
    value: ASTNode; // 表达式的值
}

export interface FunctionCall {
    type: "FunctionCall";
    name: string; // 函数名
    arguments: ASTNode[]; // 实参列表
}

export interface IfStatement {
    type: "IfStatement";
    condition: ASTNode; // 条件表达式
    thenBranch: Block; // 满足条件时执行的语句块
    elseBranch: Block | null; // 可选的 `else` 分支语句块
}

export interface WhileStatement {
    type: "WhileStatement";
    condition: ASTNode; // 循环条件
    body: Block; // 循环体
}

export interface ReturnStatement {
    type: "ReturnStatement";
    value: ASTNode; // 返回值表达式
}

export interface BreakStatement {
    type: "BreakStatement";
}

export interface ContinueStatement {
    type: "ContinueStatement";
}

export interface Block {
    type: "Block";
    body: ASTNode[]; // 块内语句
}

export interface Literal {
    type: "Literal";
    value: string | number; // 字面量的值
}
