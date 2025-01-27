import {ASTNode} from "./ASTNode";

export interface ExportStatement {
    type: "ExportStatement";
    body: ASTNode;
}