// Generated from AyaScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `AyaScriptParser`.
 */
export interface AyaScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `CommonType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterCommonType?: (ctx: CommonTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `CommonType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitCommonType?: (ctx: CommonTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `VoidType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterVoidType?: (ctx: VoidTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `VoidType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitVoidType?: (ctx: VoidTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayType`
	 * labeled alternative in `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by the `SimpleLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterSimpleLValue?: (ctx: SimpleLValueContext) => void;
	/**
	 * Exit a parse tree produced by the `SimpleLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitSimpleLValue?: (ctx: SimpleLValueContext) => void;

	/**
	 * Enter a parse tree produced by the `FieldAccessLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterFieldAccessLValue?: (ctx: FieldAccessLValueContext) => void;
	/**
	 * Exit a parse tree produced by the `FieldAccessLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitFieldAccessLValue?: (ctx: FieldAccessLValueContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayAccessLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterArrayAccessLValue?: (ctx: ArrayAccessLValueContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayAccessLValue`
	 * labeled alternative in `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitArrayAccessLValue?: (ctx: ArrayAccessLValueContext) => void;

	/**
	 * Enter a parse tree produced by the `Multiplication`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by the `Multiplication`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;

	/**
	 * Enter a parse tree produced by the `Division`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDivision?: (ctx: DivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `Division`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDivision?: (ctx: DivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `Modulus`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterModulus?: (ctx: ModulusContext) => void;
	/**
	 * Exit a parse tree produced by the `Modulus`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitModulus?: (ctx: ModulusContext) => void;

	/**
	 * Enter a parse tree produced by the `Addition`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAddition?: (ctx: AdditionContext) => void;
	/**
	 * Exit a parse tree produced by the `Addition`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAddition?: (ctx: AdditionContext) => void;

	/**
	 * Enter a parse tree produced by the `Subtraction`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSubtraction?: (ctx: SubtractionContext) => void;
	/**
	 * Exit a parse tree produced by the `Subtraction`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSubtraction?: (ctx: SubtractionContext) => void;

	/**
	 * Enter a parse tree produced by the `GreaterThan`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGreaterThan?: (ctx: GreaterThanContext) => void;
	/**
	 * Exit a parse tree produced by the `GreaterThan`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGreaterThan?: (ctx: GreaterThanContext) => void;

	/**
	 * Enter a parse tree produced by the `LessThan`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLessThan?: (ctx: LessThanContext) => void;
	/**
	 * Exit a parse tree produced by the `LessThan`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLessThan?: (ctx: LessThanContext) => void;

	/**
	 * Enter a parse tree produced by the `GreaterThanOrEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `GreaterThanOrEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitGreaterThanOrEqual?: (ctx: GreaterThanOrEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `LessThanOrEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `Equal`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEqual?: (ctx: EqualContext) => void;
	/**
	 * Exit a parse tree produced by the `Equal`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEqual?: (ctx: EqualContext) => void;

	/**
	 * Enter a parse tree produced by the `NotEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNotEqual?: (ctx: NotEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `NotEqual`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNotEqual?: (ctx: NotEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalAnd`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLogicalAnd?: (ctx: LogicalAndContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalAnd`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLogicalAnd?: (ctx: LogicalAndContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalOr`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLogicalOr?: (ctx: LogicalOrContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalOr`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLogicalOr?: (ctx: LogicalOrContext) => void;

	/**
	 * Enter a parse tree produced by the `LogicalNot`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `LogicalNot`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `Parentheses`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by the `Parentheses`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by the `Variable`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by the `Variable`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by the `Function`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `Function`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `Integer`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by the `Integer`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by the `String`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `String`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `Increment`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIncrement?: (ctx: IncrementContext) => void;
	/**
	 * Exit a parse tree produced by the `Increment`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIncrement?: (ctx: IncrementContext) => void;

	/**
	 * Enter a parse tree produced by the `Decrement`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDecrement?: (ctx: DecrementContext) => void;
	/**
	 * Exit a parse tree produced by the `Decrement`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDecrement?: (ctx: DecrementContext) => void;

	/**
	 * Enter a parse tree produced by the `ArrayList`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterArrayList?: (ctx: ArrayListContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayList`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitArrayList?: (ctx: ArrayListContext) => void;

	/**
	 * Enter a parse tree produced by the `NewObjectExpr`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNewObjectExpr?: (ctx: NewObjectExprContext) => void;
	/**
	 * Exit a parse tree produced by the `NewObjectExpr`
	 * labeled alternative in `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNewObjectExpr?: (ctx: NewObjectExprContext) => void;

	/**
	 * Enter a parse tree produced by the `TypeInferenceVarDecl`
	 * labeled alternative in `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterTypeInferenceVarDecl?: (ctx: TypeInferenceVarDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeInferenceVarDecl`
	 * labeled alternative in `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitTypeInferenceVarDecl?: (ctx: TypeInferenceVarDeclContext) => void;

	/**
	 * Enter a parse tree produced by the `ExplicitVarDecl`
	 * labeled alternative in `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterExplicitVarDecl?: (ctx: ExplicitVarDeclContext) => void;
	/**
	 * Exit a parse tree produced by the `ExplicitVarDecl`
	 * labeled alternative in `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitExplicitVarDecl?: (ctx: ExplicitVarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.funcDecl`.
	 * @param ctx the parse tree
	 */
	enterFuncDecl?: (ctx: FuncDeclContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.funcDecl`.
	 * @param ctx the parse tree
	 */
	exitFuncDecl?: (ctx: FuncDeclContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	enterAssignStmt?: (ctx: AssignStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.assignStmt`.
	 * @param ctx the parse tree
	 */
	exitAssignStmt?: (ctx: AssignStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.funcCall`.
	 * @param ctx the parse tree
	 */
	enterFuncCall?: (ctx: FuncCallContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.funcCall`.
	 * @param ctx the parse tree
	 */
	exitFuncCall?: (ctx: FuncCallContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.exportStmt`.
	 * @param ctx the parse tree
	 */
	enterExportStmt?: (ctx: ExportStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.exportStmt`.
	 * @param ctx the parse tree
	 */
	exitExportStmt?: (ctx: ExportStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileStmt?: (ctx: WhileStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.whileStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileStmt?: (ctx: WhileStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.breakStmt`.
	 * @param ctx the parse tree
	 */
	enterBreakStmt?: (ctx: BreakStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.breakStmt`.
	 * @param ctx the parse tree
	 */
	exitBreakStmt?: (ctx: BreakStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.continueStmt`.
	 * @param ctx the parse tree
	 */
	enterContinueStmt?: (ctx: ContinueStmtContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.continueStmt`.
	 * @param ctx the parse tree
	 */
	exitContinueStmt?: (ctx: ContinueStmtContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.arrList`.
	 * @param ctx the parse tree
	 */
	enterArrList?: (ctx: ArrListContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.arrList`.
	 * @param ctx the parse tree
	 */
	exitArrList?: (ctx: ArrListContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitLvalue?: (ctx: LvalueContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	enterMethodDecl?: (ctx: MethodDeclContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.methodDecl`.
	 * @param ctx the parse tree
	 */
	exitMethodDecl?: (ctx: MethodDeclContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `AyaScriptParser.objectCreationExpr`.
	 * @param ctx the parse tree
	 */
	enterObjectCreationExpr?: (ctx: ObjectCreationExprContext) => void;
	/**
	 * Exit a parse tree produced by `AyaScriptParser.objectCreationExpr`.
	 * @param ctx the parse tree
	 */
	exitObjectCreationExpr?: (ctx: ObjectCreationExprContext) => void;
}

