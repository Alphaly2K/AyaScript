﻿import {AyaScriptVisitor} from "../ANTLR/AyaScriptVisitor";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import {
    Assignment,
    ASTNode, BinaryExpression,
    Block,
    BreakStatement,
    ContinueStatement, ExportStatement,
    FunctionCall,
    FunctionDeclaration,
    IfStatement, Integer,
    LValue,
    Parameter,
    Program,
    ReturnStatement, SendStatement, Type, UnaryExpression,
    VariableDeclaration,
    WhileStatement
} from "./AST";
import {
    AdditionContext, ArrayAccessLValueContext, ArrayTypeContext,
    BlockContext, CommonTypeContext, DecrementContext,
    DivisionContext,
    EqualContext, ExplicitVarDeclContext, ExportStmtContext, FieldAccessLValueContext,
    FuncCallContext,
    FuncDeclContext,
    GreaterThanContext,
    GreaterThanOrEqualContext,
    IfStmtContext, IncrementContext,
    IntegerContext,
    LessThanContext,
    LessThanOrEqualContext,
    LogicalAndContext,
    LogicalNotContext,
    LogicalOrContext, LvalueContext,
    ModulusContext,
    MultiplicationContext,
    NotEqualContext,
    ParamContext,
    ParamListContext,
    SendStmtContext, SimpleLValueContext, StatementContext,
    StringContext,
    SubtractionContext, TypeContext, TypeInferenceVarDeclContext,
    VarDeclContext, VoidTypeContext,
} from "../ANTLR/AyaScriptParser";

export class ASTBuilder extends AbstractParseTreeVisitor<any> implements AyaScriptVisitor<any> {
    visitProgram(ctx: any): Program {
        const body = ctx.statement().map((stmt: any) => this.visit(stmt));
        return {type: "Program", body};
    }

    visitExplicitVarDecl(ctx: ExplicitVarDeclContext) : VariableDeclaration {
        const name = ctx.ID().text;
        const expr = ctx.expr()
        const value = expr ? this.visit(expr) : null;
        const varType = this.visit(ctx.type())
        return {
            type:"VariableDeclaration",
            name,
            value,
            varType
        }
    }

    visitTypeInferenceVarDecl(ctx: TypeInferenceVarDeclContext): VariableDeclaration {
        const name = ctx.ID().text;
        const expr = ctx.expr()
        const value = expr ? this.visit(expr) : null;
        const varType = null;
        return {
            type:"VariableDeclaration",
            name,
            value,
            varType
        }
    }

    visitCommonType(ctx: CommonTypeContext): Type {
        const name = ctx.ID().text;
        const isArray = false;
        return {
            type:"Type",
            name,
            isArray,
            arraySize: null
        }
    }

    visitArrayType(ctx: ArrayTypeContext): Type {
        const name = ctx.ID().text;
        const expr = ctx.expr()
        const value = expr ? this.visit(expr) : null;
        const isArray = true;
        return {
            type:"Type",
            name,
            isArray,
            arraySize: value
        }
    }

    visitVoidType(ctx: VoidTypeContext): Type {
        return {
            type:"Type",
            name:"void",
            isArray: false,
            arraySize: null
        }
    }

    // 构建 FunctionDeclaration 节点
    visitFuncDecl(ctx: FuncDeclContext): FunctionDeclaration {
        const name = ctx.ID().text; // 获取函数名称
        const paramList = ctx.paramList()
        const params = paramList
            ? paramList.param().map((p: any) => this.visit(p)) // 处理参数列表
            : [];
        const type = ctx.type()
        const returnType = type ? type.text : "void";
        const body = this.visit(ctx.block())

        return {
            type: "FunctionDeclaration",
            name,
            params,
            returnType,
            body,
        };
    }

    visitParamList(ctx: ParamListContext): Parameter[] {
        return ctx.param().map((p: any) => this.visit(p));
    }

    visitParam(ctx: ParamContext): Parameter {
        const name = ctx.ID().text;
        const paramType = ctx.type().text
        return {
            type: "Parameter",
            name,
            paramType,
        };
    }

    // 构建 Assignment 节点
    visitAssignStmt(ctx: any): Assignment {
        const target = this.visit(ctx.lvalue());
        const value = this.visit(ctx.expr());
        return {type: "Assignment", target, value};
    }

    // 构建 FunctionCall 节点
    visitFuncCall(ctx: FuncCallContext): FunctionCall {
        const name = ctx.ID().text;
        const args = ctx.expr().map((arg: any) => this.visit(arg));
        return {type: "FunctionCall", name, arguments: args};
    }

    visitSendStmt(ctx: SendStmtContext): SendStatement {
        const value = this.visit(ctx.expr());
        return {
            type: "SendStatement",
            body: value,
        }
    }

    visitString(ctx: StringContext): String {
        return <String>ctx.children?.toString();
    }

    visitInteger(ctx: IntegerContext): Integer {
        const integer = parseInt(ctx.INT().text);
        return {
            type: "Integer",
            value: integer,
        }
    }

    visitAddition(ctx: AdditionContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "+",
            left,
            right,
        }
    }

    visitSubtraction(ctx: SubtractionContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "-",
            left,
            right,
        }
    }

    visitMultiplication(ctx: MultiplicationContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "*",
            left,
            right,
        }
    }

    visitDivision(ctx: DivisionContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "/",
            left,
            right,
        }
    }

    visitLessThan(ctx: LessThanContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "<",
            left,
            right,
        }
    }

    visitModulus(ctx: ModulusContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "%",
            left,
            right,
        }
    }

    visitGreaterThan(ctx: GreaterThanContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: ">",
            left,
            right,
        }
    }

    visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: ">=",
            left,
            right,
        }
    }

    visitLogicalAnd(ctx: LogicalAndContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "&&",
            left,
            right,
        }
    }

    visitNotEqual(ctx: NotEqualContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "!=",
            left,
            right,
        }
    }

    visitLogicalOr(ctx: LogicalOrContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "||",
            left,
            right,
        }
    }

    // 构建 IfStatement 节点
    visitIfStmt(ctx: IfStmtContext): IfStatement {
        const condition = this.visit(ctx.expr());
        const thenBranch = this.visit(ctx.block(0));
        let elseBlock: BlockContext;
        try {
            elseBlock = ctx.block(1)
        } catch (err: any) {
            const elseBranch = null;
            return {type: "IfStatement", condition, thenBranch, elseBranch}
        }
        // @ts-ignore
        const elseBranch = elseBlock ? this.visit(elseBlock) : null;
        return {type: "IfStatement", condition, thenBranch, elseBranch};
    }

    visitEqual(ctx: EqualContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "==",
            left,
            right,
        }
    }

    visitLogicalNot(ctx: LogicalNotContext): UnaryExpression {
        const operand = this.visit(ctx.expr());
        return {
            type: "UnaryExpression",
            operator: "!",
            operand,
        }
    }

    visitIncrement(ctx: IncrementContext): UnaryExpression {
        const name = ctx.lvalue().text;
        return {
            type: "UnaryExpression",
            operator: "++",
            operand: this.visit(ctx.lvalue())
        }
    }

    visitStatement(ctx: StatementContext): any {
        if (ctx.expr() != undefined) {
            // @ts-ignore
            return this.visit(ctx.expr());
        }
        return this.visitChildren(ctx)
    }

    visitExportStmt(ctx: ExportStmtContext): ExportStatement {
        const body = this.visitChildren(ctx);
        return {
            type: "ExportStatement",
            body: body,
        }
    }

    visitDecrement(ctx: DecrementContext): UnaryExpression {
        console.log(this.visit(ctx.lvalue()));
        return {
            type: "UnaryExpression",
            operator: "--",
            operand: this.visit(ctx.lvalue())
        }
    }

    visitSimpleLValue(ctx: SimpleLValueContext): LValue {
        return {
            type: "SimpleLValue",
            name: ctx.ID().text
        };
    }

    visitFieldAccessLValue(ctx: FieldAccessLValueContext): LValue {
        const object = this.visit(ctx.lvalue());
        const field = ctx.ID().text;
        return {
            type: "FieldAccessLValue",
            object,
            field
        };
    }

    visitArrayAccessLValue(ctx: ArrayAccessLValueContext): LValue {
        const array = this.visit(ctx.lvalue());
        const index = this.visitExpr(ctx.expr());
        return {
            type: "ArrayAccessLValue",
            array,
            index: index
        };
    }

    visitLessThanOrEqual(ctx: LessThanOrEqualContext): BinaryExpression {
        const left = this.visit(ctx.expr(0))
        const right = this.visit(ctx.expr(1))
        return {
            type: "BinaryExpression",
            operator: "<=",
            left,
            right,
        }
    }

    visitWhileStmt(ctx: any): WhileStatement {
        const condition = this.visit(ctx.expr());
        const body = this.visit(ctx.block());
        return {type: "WhileStatement", condition, body};
    }

    visitReturnStmt(ctx: any): ReturnStatement {
        const value = this.visit(ctx.expr());
        return {type: "ReturnStatement", value};
    }

    visitBreakStmt(ctx: any): BreakStatement {
        return {type: "BreakStatement"};
    }

    visitContinueStmt(ctx: any): ContinueStatement {
        return {type: "ContinueStatement"};
    }

    visitBlock(ctx: BlockContext): Block {
        const body = ctx.statement().map((stmt: any) => this.visit(stmt));
        return {type: "Block", body};
    }


    visitExpr(ctx: any): ASTNode {
        if (ctx.expr().length === 1) {
            return this.visit(ctx.expr(0));
        }
        if (ctx.getChildCount() === 3) {
            const left = this.visit(ctx.expr(0));
            const operator = ctx.getChild(1).getText();
            const right = this.visit(ctx.expr(1));
            return {type: "BinaryExpression", operator, left, right};
        }
        if (ctx.LPAREN()) {
            return this.visit(ctx.expr(0));
        }
        return this.visitChildren(ctx);
    }

    protected defaultResult(): any {
        return;
    }
}