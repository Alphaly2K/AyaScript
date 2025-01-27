import { ASTNode } from "./ASTNode";

export interface ReturnStatement {
  type: "ReturnStatement";
  value: ASTNode; // 返回值表达式
}
