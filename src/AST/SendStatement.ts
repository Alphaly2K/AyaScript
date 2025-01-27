import { ASTNode } from "./ASTNode";

export interface SendStatement {
  type: "SendStatement";
  body: ASTNode;
}
