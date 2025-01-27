import { ASTNode } from "./ASTNode";
import { Block } from "./Block";

export interface IfStatement {
  type: "IfStatement";
  condition: ASTNode; // 条件表达式
  thenBranch: Block; // 满足条件时执行的语句块
  elseBranch: Block | null; // 可选的 `else` 分支语句块
}
