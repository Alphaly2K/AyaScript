import { Block } from "./Block";
import { Parameter } from "./Parameter";
import {Type} from "./Type";

export interface FunctionDeclaration {
  type: "FunctionDeclaration";
  name: string;
  params: Parameter[];
  returnType: Type;
  body: Block;
}
