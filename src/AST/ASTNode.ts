import { Program } from "./Program";
import { VariableDeclaration } from "./VariableDeclaration";
import { FunctionDeclaration } from "./FunctionDeclaration";
import { Assignment } from "./Assignment";
import { FunctionCall } from "./FunctionCall";
import { IfStatement } from "./IfStatement";
import { WhileStatement } from "./WhileStatement";
import { ReturnStatement } from "./ReturnStatement";
import { BreakStatement } from "./BreakStatement";
import { ContinueStatement } from "./ContinueStatement";
import { SendStatement } from "./SendStatement";
import { Block } from "./Block";
import { BinaryExpression } from "./BinaryExpression";
import { UnaryExpression } from "./UnaryExpression";
import { LValue } from "./LValue";
import { Parameter } from "./Parameter";
import { Integer } from "./Integer";
import { Literal } from "./Literal";
import { Type } from "./Type";
import { ExportStatement } from "./ExportStatement";
import { ArrayList } from "./ArrayList";
import { String } from "./String";

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
  | LValue
  | Parameter
  | Integer
  | Literal
  | Type
  | ExportStatement
  | ArrayList
  | String;
