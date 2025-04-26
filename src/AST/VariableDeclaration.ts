import { ASTNode } from "./ASTNode";
import { Type } from "./Type";

export interface VariableDeclaration {
  type: "VariableDeclaration";
  name: string;
  value: ASTNode | null;
  varType: Type | null;
  isPublic: boolean;
  isStatic: boolean;
  isFinal: boolean;
}
