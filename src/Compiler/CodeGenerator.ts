import {ASTNode} from "../AST/ASTNode";
import {Program} from "../AST/Program";
import {BinaryExpression} from "../AST/BinaryExpression";

export class CodeGenerator {
    private instructions: Instruction[] = [];
    private symbolTable: Map<string, number> = new Map();
    private labelCounter = 0;

    public generate(ast: ASTNode): Instruction[] {
        this.visit(ast);
        return this.instructions;
    }
    public visit(node: ASTNode):any{
        switch(node.type) {
            case "Program":
                this.visitProgram(node)
                break;
            case "BinaryExpression":
                this.visitBinaryExpression(node)
                break;
            default:
                throw new Error("Unknown type");
        }
    }
    visitProgram(ast: Program) {
        for(const node of ast.body)
            this.visit(node);
    }
    visitBinaryExpression(ast: BinaryExpression) {
        const left = this.visit(ast.left);
        const right = this.visit(ast.right);
        this.instructions.push();                       // todo: string support
    }

    constructor() {
    }
}