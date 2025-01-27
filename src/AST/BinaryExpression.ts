import { ASTNode } from "./ASTNode";

export interface BinaryExpression {
  type: "BinaryExpression";
  operator: string;
  left: ASTNode;
  right: ASTNode;
}
