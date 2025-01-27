import { ASTNode } from "./ASTNode";

export interface UnaryExpression {
  type: "UnaryExpression";
  operator: string;
  operand: ASTNode;
}
