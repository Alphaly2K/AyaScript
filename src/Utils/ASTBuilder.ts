﻿import { AyaScriptVisitor } from "../ANTLR/AyaScriptVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import {
  AdditionContext,
  ArrayAccessLValueContext,
  ArrayListContext,
  ArrayTypeContext,
  BlockContext, ClassBodyContext, ClassDeclarationContext,
  CommonTypeContext,
  DecrementContext,
  DivisionContext,
  EqualContext,
  ExplicitVarDeclContext,
  ExportStmtContext,
  FieldAccessLValueContext,
  FuncCallContext,
  FuncDeclContext,
  GreaterThanContext,
  GreaterThanOrEqualContext,
  IfStmtContext,
  IncrementContext,
  IntegerContext,
  LessThanContext,
  LessThanOrEqualContext,
  LogicalAndContext,
  LogicalNotContext,
  LogicalOrContext,
  LvalueContext, MethodDeclContext,
  ModulusContext,
  MultiplicationContext,
  NotEqualContext, ObjectCreationExprContext,
  ParamContext,
  ParamListContext,
  SimpleLValueContext,
  StatementContext,
  StringContext,
  SubtractionContext,
  TypeContext,
  TypeInferenceVarDeclContext,
  VarDeclContext,
  VoidTypeContext,
} from "../ANTLR/AyaScriptParser";
import { Program } from "../AST/Program";
import { VariableDeclaration } from "../AST/VariableDeclaration";
import { Type } from "../AST/Type";
import { FunctionDeclaration } from "../AST/FunctionDeclaration";
import { Parameter } from "../AST/Parameter";
import { Assignment } from "../AST/Assignment";
import { FunctionCall } from "../AST/FunctionCall";
import { Integer } from "../AST/Integer";
import { BinaryExpression } from "../AST/BinaryExpression";
import { IfStatement } from "../AST/IfStatement";
import { UnaryExpression } from "../AST/UnaryExpression";
import { ExportStatement } from "../AST/ExportStatement";
import { LValue } from "../AST/LValue";
import { WhileStatement } from "../AST/WhileStatement";
import { ReturnStatement } from "../AST/ReturnStatement";
import { BreakStatement } from "../AST/BreakStatement";
import { ContinueStatement } from "../AST/ContinueStatement";
import { Block } from "../AST/Block";
import { ASTNode } from "../AST/ASTNode";
import { ArrayList } from "../AST/ArrayList";
import { String } from "../AST/String";
import {ClassDeclaration} from "../AST/ClassDeclaration";
import {ClassBody} from "../AST/ClassBody";
import {MethodDeclaration} from "../AST/MethodDeclaration";
import {ObjectCreationExpression} from "../AST/ObjectCreationExpression";

export class ASTBuilder
  extends AbstractParseTreeVisitor<any>
  implements AyaScriptVisitor<any>
{
  visitProgram(ctx: any): Program {
    const body = ctx.statement().map((stmt: any) => this.visit(stmt));
    return { type: "Program", body };
  }

  visitExplicitVarDecl(ctx: ExplicitVarDeclContext): VariableDeclaration {
    const name = ctx.ID().text;
    const expr = ctx.expr();
    const value = expr ? this.visit(expr) : null;
    const varType = this.visit(ctx.type());
    const isPublic = (ctx.PUBLIC()===undefined&&ctx.PRIVATE()===undefined)?true:(ctx.PUBLIC() !== undefined);
    const isFinal = ctx.FINAL()!==undefined;
    const isStatic = ctx.STATIC()!==undefined;
    return {
      type: "VariableDeclaration",
      name,
      value,
      varType,
      isPublic,
      isFinal,
      isStatic,
    };
  }

  visitTypeInferenceVarDecl(
    ctx: TypeInferenceVarDeclContext
  ): VariableDeclaration {
    const name = ctx.ID().text;
    const expr = ctx.expr();
    const value = expr ? this.visit(expr) : null;
    const varType = null;
    const isPublic = (ctx.PUBLIC()===undefined&&ctx.PRIVATE()===undefined)?true:(ctx.PUBLIC() !== undefined);
    const isFinal = ctx.FINAL()!==undefined;
    const isStatic = ctx.STATIC()!==undefined;
    return {
      type: "VariableDeclaration",
      name,
      value,
      varType,
      isPublic,
      isFinal,
      isStatic,
    };
  }

  visitCommonType(ctx: CommonTypeContext): Type {
    const name = ctx.ID().text;
    const isArray = false;
    return {
      type: "Type",
      name,
      isArray,
    };
  }

  visitArrayType(ctx: ArrayTypeContext): Type {
    const name = ctx.ID().text;
    const expr = ctx.expr();
    const value = expr ? this.visit(expr) : null;
    const isArray = true;
    return {
      type: "Type",
      name,
      isArray,
      arraySize: value,
    };
  }

  visitVoidType(ctx: VoidTypeContext): Type {
    return {
      type: "Type",
      name: "void",
      isArray: false,
    };
  }

  visitArrayList(ctx: ArrayListContext): ArrayList {
    let value: Array<any> = [];
    ctx
      .arrList()
      .expr()
      .forEach((expr) => {
        value.push(this.visit(expr));
      });
    return {
      type: "ArrayList",
      value: value,
    };
  }

  visitFuncDecl(ctx: FuncDeclContext): FunctionDeclaration {
    const name = ctx.ID().text;
    const paramList = ctx.paramList();
    const params = paramList
      ? paramList.param().map((p: any) => this.visit(p))
      : [];
    const type = ctx.type();
    const returnType = type ? this.visit(type) : { type:"Type", name: "void", isArray:false };
    const body = this.visit(ctx.block());

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
    const paramType = ctx.type().text;
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
    return { type: "Assignment", target, value };
  }

  // 构建 FunctionCall 节点
  visitFuncCall(ctx: FuncCallContext): FunctionCall {
    const name = ctx.ID().text;
    const args = ctx.expr().map((arg: any) => this.visit(arg));
    return { type: "FunctionCall", name, arguments: args };
  }

  visitString(ctx: StringContext): String {
    const value = <string>ctx.children
      ?.toString()
      .replace(/(?<!\\)"/g, "")
      .replace(/(?<!\\)\\/g, "")
      .replace(/\\\\/g, "\\");
    return {
      type: "String",
      value,
    };
  }

  visitInteger(ctx: IntegerContext): Integer {
    const integer = parseInt(ctx.INT().text);
    return {
      type: "Integer",
      value: integer,
    };
  }

  visitAddition(ctx: AdditionContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "+",
      left,
      right,
    };
  }

  visitSubtraction(ctx: SubtractionContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "-",
      left,
      right,
    };
  }

  visitMultiplication(ctx: MultiplicationContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "*",
      left,
      right,
    };
  }

  visitDivision(ctx: DivisionContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "/",
      left,
      right,
    };
  }

  visitLessThan(ctx: LessThanContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "<",
      left,
      right,
    };
  }

  visitModulus(ctx: ModulusContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "%",
      left,
      right,
    };
  }

  visitGreaterThan(ctx: GreaterThanContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: ">",
      left,
      right,
    };
  }

  visitGreaterThanOrEqual(ctx: GreaterThanOrEqualContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: ">=",
      left,
      right,
    };
  }

  visitLogicalAnd(ctx: LogicalAndContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "&&",
      left,
      right,
    };
  }

  visitNotEqual(ctx: NotEqualContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "!=",
      left,
      right,
    };
  }

  visitLogicalOr(ctx: LogicalOrContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "||",
      left,
      right,
    };
  }

  // 构建 IfStatement 节点
  visitIfStmt(ctx: IfStmtContext): IfStatement {
    const condition = this.visit(ctx.expr());
    const thenBranch = this.visit(ctx.block(0));
    let elseBlock: BlockContext;
    try {
      elseBlock = ctx.block(1);
    } catch (err: any) {
      const elseBranch = null;
      return { type: "IfStatement", condition, thenBranch, elseBranch };
    }
    // @ts-ignore
    const elseBranch = elseBlock ? this.visit(elseBlock) : null;
    return { type: "IfStatement", condition, thenBranch, elseBranch };
  }

  visitEqual(ctx: EqualContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "==",
      left,
      right,
    };
  }

  visitLogicalNot(ctx: LogicalNotContext): UnaryExpression {
    const operand = this.visit(ctx.expr());
    return {
      type: "UnaryExpression",
      operator: "!",
      operand,
    };
  }

  visitIncrement(ctx: IncrementContext): UnaryExpression {
    const name = ctx.lvalue().text;
    return {
      type: "UnaryExpression",
      operator: "++",
      operand: this.visit(ctx.lvalue()),
    };
  }

  visitStatement(ctx: StatementContext): any {
    if (ctx.expr() != undefined) {
      // @ts-ignore
      return this.visit(ctx.expr());
    }
    return this.visitChildren(ctx);
  }

  visitExportStmt(ctx: ExportStmtContext): ExportStatement {
    const body = this.visitChildren(ctx);
    return {
      type: "ExportStatement",
      body: body,
    };
  }

  visitDecrement(ctx: DecrementContext): UnaryExpression {
    return {
      type: "UnaryExpression",
      operator: "--",
      operand: this.visit(ctx.lvalue()),
    };
  }

  visitSimpleLValue(ctx: SimpleLValueContext): LValue {
    return {
      type: "SimpleLValue",
      name: ctx.ID().text,
    };
  }

  visitFieldAccessLValue(ctx: FieldAccessLValueContext): LValue {
    const object = this.visit(ctx.lvalue());
    const field = ctx.ID().text;
    return {
      type: "FieldAccessLValue",
      object,
      field,
    };
  }

  visitArrayAccessLValue(ctx: ArrayAccessLValueContext): LValue {
    const array = this.visit(ctx.lvalue());
    const index = this.visitExpr(ctx.expr());
    return {
      type: "ArrayAccessLValue",
      array,
      index: index,
    };
  }

  visitLessThanOrEqual(ctx: LessThanOrEqualContext): BinaryExpression {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    return {
      type: "BinaryExpression",
      operator: "<=",
      left,
      right,
    };
  }

  visitWhileStmt(ctx: any): WhileStatement {
    const condition = this.visit(ctx.expr());
    const body = this.visit(ctx.block());
    return { type: "WhileStatement", condition, body };
  }

  visitReturnStmt(ctx: any): ReturnStatement {
    const value = this.visit(ctx.expr());
    return { type: "ReturnStatement", value };
  }

  visitBreakStmt(ctx: any): BreakStatement {
    return { type: "BreakStatement" };
  }

  visitContinueStmt(ctx: any): ContinueStatement {
    return { type: "ContinueStatement" };
  }

  visitBlock(ctx: BlockContext): Block {
    const body = ctx.statement().map((stmt: any) => this.visit(stmt));
    return { type: "Block", body };
  }

  visitClassBody(ctx: ClassBodyContext): ClassBody {
    let varList: VariableDeclaration[] =[]
    ctx.varDecl().forEach((decl: any) => {
      varList.push(this.visit(decl))
    });
    let methodList: MethodDeclaration[] =[]
    ctx.methodDecl().forEach((method: any) => {
      methodList.push(this.visit(method))
    })
    return {
      type:"ClassBody",
      properties: varList,
      methods: methodList,
    }
  }

  visitMethodDecl(ctx: MethodDeclContext): MethodDeclaration {
    const isPublic = (ctx.PUBLIC()===undefined&&ctx.PRIVATE()===undefined)?true:(ctx.PUBLIC() !== undefined);
    const isFinal = ctx.FINAL()!==undefined;
    const isStatic = ctx.STATIC()!==undefined;
    const name = ctx.ID().text;
    const body = this.visitBlock(ctx.block());
    const tmp = ctx.type();
    const returnType = tmp?this.visit(tmp): { type:"Type", name: "void", isArray:false };
    const paramList = ctx.paramList()
    const params = paramList
        ? paramList.param().map((p: any) => this.visit(p))
        : [];
    return {
      type:"MethodDeclaration",
      name,
      isFinal,
      isStatic,
      isPublic,
      body,
      returnType,
      params,
    }
  }

  visitClassDeclaration(ctx: ClassDeclarationContext): ClassDeclaration {
    const body =this.visitClassBody(ctx.classBody());
    if(ctx.EXTENDS()===undefined&&ctx.IMPLEMENTS()===undefined){
      return {
        type:"ClassDeclaration",
        name: ctx.ID(0).text,
        body
      }
    }
    if(ctx.EXTENDS()===undefined&&ctx.IMPLEMENTS()!==undefined){
      let implementations : string[] =[]
      ctx.ID().forEach((value: any, index) => {
        if(index!==0)
          implementations.push(value.text);
      })
      return {
        type:"ClassDeclaration",
        name: ctx.ID(0).text,
        implement: implementations,
        body
      }
    }
    if(ctx.EXTENDS()!==undefined&&ctx.IMPLEMENTS()===undefined){
      return {
        type:"ClassDeclaration",
        name: ctx.ID(0).text,
        parent: ctx.ID(1).text,
        body
      }
    }
    let implementations : string[] =[]
    ctx.ID().forEach((value: any, index) => {
      if(index!==0&&index!==1){
        implementations.push(value.text);
      }
    })
    return {
      type:"ClassDeclaration",
      name: ctx.ID(0).text,
      parent: ctx.ID(1).text,
      implement: implementations,
      body
    }
  }

  visitObjectCreationExpr(ctx: ObjectCreationExprContext): ObjectCreationExpression{
    const className = ctx.ID().text;
    const args = ctx.expr().map((arg: any) => this.visit(arg));
    return {
      type:"ObjectCreationExpression",
      className,
      args
    }
  }

  visitExpr(ctx: any): ASTNode {
    if (ctx instanceof IntegerContext) return this.visit(ctx);
    if (ctx.expr().length === 1) {
      return this.visit(ctx.expr(0));
    }
    if (ctx.getChildCount() === 3) {
      const left = this.visit(ctx.expr(0));
      const operator = ctx.getChild(1).getText();
      const right = this.visit(ctx.expr(1));
      return { type: "BinaryExpression", operator, left, right };
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
