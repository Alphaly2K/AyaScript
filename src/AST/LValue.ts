import { ASTNode } from "./ASTNode";

export type LValue = SimpleLValue | FieldAccessLValue | ArrayAccessLValue;
export interface SimpleLValue {
  type: "SimpleLValue";
  name: string;
}
export interface FieldAccessLValue {
  type: "FieldAccessLValue";
  object: LValue;
  field: string;
}
export interface ArrayAccessLValue {
  type: "ArrayAccessLValue";
  array: LValue;
  index: ASTNode;
}
