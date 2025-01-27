import {ASTNode} from "./ASTNode";

export interface Block {
    type: "Block";
    body: ASTNode[];
}