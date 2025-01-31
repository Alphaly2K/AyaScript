import {CodeGenerator} from "./CodeGenerator";
import {ASTNode} from "../AST/ASTNode";

export class Ayac
{
    private codeGen;
    private ast: ASTNode;
    constructor(ast:ASTNode) {
        this.codeGen=new CodeGenerator();
        this.ast=ast;
    }
    genCode(){
        return this.codeGen.generate(this.ast);
    }
}