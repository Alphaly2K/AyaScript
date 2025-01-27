import {Block} from "./Block";
import {Parameter} from "./Parameter";

export interface FunctionDeclaration {
    type: "FunctionDeclaration";
    name: string;
    params: Parameter[];
    returnType: string;
    body: Block;
}
