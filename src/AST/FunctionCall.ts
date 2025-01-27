import { ASTNode } from "./ASTNode";

export interface FunctionCall {
  type: "FunctionCall";
  name: string;
  arguments: ASTNode[];
}
