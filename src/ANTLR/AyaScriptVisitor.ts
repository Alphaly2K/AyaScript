// Generated from AyaScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CommonTypeContext } from "./AyaScriptParser";
import { VoidTypeContext } from "./AyaScriptParser";
import { ArrayTypeContext } from "./AyaScriptParser";
import { SimpleLValueContext } from "./AyaScriptParser";
import { FieldAccessLValueContext } from "./AyaScriptParser";
import { ArrayAccessLValueContext } from "./AyaScriptParser";
import { MultiplicationContext } from "./AyaScriptParser";
import { DivisionContext } from "./AyaScriptParser";
import { ModulusContext } from "./AyaScriptParser";
import { AdditionContext } from "./AyaScriptParser";
import { SubtractionContext } from "./AyaScriptParser";
import { GreaterThanContext } from "./AyaScriptParser";
import { LessThanContext } from "./AyaScriptParser";
import { GreaterThanOrEqualContext } from "./AyaScriptParser";
import { LessThanOrEqualContext } from "./AyaScriptParser";
import { EqualContext } from "./AyaScriptParser";
import { NotEqualContext } from "./AyaScriptParser";
import { LogicalAndContext } from "./AyaScriptParser";
import { LogicalOrContext } from "./AyaScriptParser";
import { LogicalNotContext } from "./AyaScriptParser";
import { ParenthesesContext } from "./AyaScriptParser";
import { VariableContext } from "./AyaScriptParser";
import { FunctionContext } from "./AyaScriptParser";
import { IntegerContext } from "./AyaScriptParser";
import { StringContext } from "./AyaScriptParser";
import { IncrementContext } from "./AyaScriptParser";
import { DecrementContext } from "./AyaScriptParser";
import { ArrayListContext } from "./AyaScriptParser";
import { NewObjectExprContext } from "./AyaScriptParser";
import { TypeInferenceVarDeclContext } from "./AyaScriptParser";
import { ExplicitVarDeclContext } from "./AyaScriptParser";
import { ProgramContext } from "./AyaScriptParser";
import { StatementContext } from "./AyaScriptParser";
import { VarDeclContext } from "./AyaScriptParser";
import { FuncDeclContext } from "./AyaScriptParser";
import { AssignStmtContext } from "./AyaScriptParser";
import { FuncCallContext } from "./AyaScriptParser";
import { ExportStmtContext } from "./AyaScriptParser";
import { ReturnStmtContext } from "./AyaScriptParser";
import { IfStmtContext } from "./AyaScriptParser";
import { WhileStmtContext } from "./AyaScriptParser";
import { BreakStmtContext } from "./AyaScriptParser";
import { ContinueStmtContext } from "./AyaScriptParser";
import { ParamListContext } from "./AyaScriptParser";
import { ParamContext } from "./AyaScriptParser";
import { ExprContext } from "./AyaScriptParser";
import { BlockContext } from "./AyaScriptParser";
import { ArrListContext } from "./AyaScriptParser";
import { LvalueContext } from "./AyaScriptParser";
import { TypeContext } from "./AyaScriptParser";
import { MethodDeclContext } from "./AyaScriptParser";
import { ClassDeclarationContext } from "./AyaScriptParser";
import { ClassBodyContext } from "./AyaScriptParser";
import { ObjectCreationExprContext } from "./AyaScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AyaScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AyaScriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `CommonType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonType?: (ctx: CommonTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `VoidType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoidType?: (ctx: VoidTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `SimpleLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleLValue?: (ctx: SimpleLValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `FieldAccessLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAccessLValue?: (ctx: FieldAccessLValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayAccessLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccessLValue?: (ctx: ArrayAccessLValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `Multiplication`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplication?: (ctx: MultiplicationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Division`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Modulus`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModulus?: (ctx: ModulusContext) => Result;

	/**
	 * Visit a parse tree produced by the `Addition`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddition?: (ctx: AdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Subtraction`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtraction?: (ctx: SubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GreaterThan`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThan?: (ctx: GreaterThanContext) => Result;

	/**
	 * Visit a parse tree produced by the `LessThan`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThan?: (ctx: LessThanContext) => Result;

	/**
	 * Visit a parse tree produced by the `GreaterThanOrEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `Equal`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual?: (ctx: EqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `NotEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotEqual?: (ctx: NotEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalAnd`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAnd?: (ctx: LogicalAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalOr`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOr?: (ctx: LogicalOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `LogicalNot`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `Parentheses`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `Variable`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `Function`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Integer`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by the `String`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `Increment`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrement?: (ctx: IncrementContext) => Result;

	/**
	 * Visit a parse tree produced by the `Decrement`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecrement?: (ctx: DecrementContext) => Result;

	/**
	 * Visit a parse tree produced by the `ArrayList`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayList?: (ctx: ArrayListContext) => Result;

	/**
	 * Visit a parse tree produced by the `NewObjectExpr`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewObjectExpr?: (ctx: NewObjectExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `TypeInferenceVarDecl`
	 * labeled alternative in `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInferenceVarDecl?: (ctx: TypeInferenceVarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExplicitVarDecl`
	 * labeled alternative in `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitVarDecl?: (ctx: ExplicitVarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.funcDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDecl?: (ctx: FuncDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.assignStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStmt?: (ctx: AssignStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.funcCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncCall?: (ctx: FuncCallContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.exportStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStmt?: (ctx: ExportStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.whileStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.breakStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStmt?: (ctx: BreakStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.continueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStmt?: (ctx: ContinueStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.arrList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrList?: (ctx: ArrListContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLvalue?: (ctx: LvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.methodDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDecl?: (ctx: MethodDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `AyaScriptParser.objectCreationExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectCreationExpr?: (ctx: ObjectCreationExprContext) => Result;
}

