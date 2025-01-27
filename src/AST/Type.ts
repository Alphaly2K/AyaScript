import {ASTNode} from "./ASTNode";

export interface Type{
    type: "Type";
    name: string;
    isArray: boolean;
    arraySize: ASTNode | null;
}