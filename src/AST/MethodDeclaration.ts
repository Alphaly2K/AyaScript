import {Parameter} from "./Parameter";
import {Block} from "./Block";
import {Type} from "./Type";

export interface MethodDeclaration {
    type: "MethodDeclaration";
    name: string;
    isStatic: boolean;
    isPublic: boolean;
    isFinal: boolean;
    returnType: Type;
    params: Parameter[];
    body: Block;
}