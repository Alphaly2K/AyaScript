import { ASTNode } from "./ASTNode";
import { Block } from "./Block";

export interface WhileStatement {
  type: "WhileStatement";
  condition: ASTNode; // 循环条件
  body: Block; // 循环体
}
