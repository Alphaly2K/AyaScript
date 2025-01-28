import {ASTNode} from "../AST/ASTNode";

export class CodeGenerator {
    private ast:ASTNode;
    public generate(): string {
        return ``
    }
    constructor(ast: ASTNode) {
        this.ast = ast;
    }
}