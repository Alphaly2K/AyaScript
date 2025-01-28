import {CodeGenerator} from "./CodeGenerator";
import {ASTNode} from "../AST/ASTNode";

export class Ayac
{
    private codeGen;
    constructor(ast:ASTNode) {
        this.codeGen=new CodeGenerator(ast);
    }
    genCode(){
        return this.codeGen.generate();
    }
}