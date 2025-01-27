import { LValue } from "./LValue";
import { ASTNode } from "./ASTNode";

export interface Assignment {
  type: "Assignment";
  target: LValue;
  value: ASTNode;
}
