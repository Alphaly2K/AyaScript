import {ASTNode} from "./ASTNode";

export interface Program {
    type: "Program";
    body: ASTNode[]; // 所有语句组成的程序主体
}