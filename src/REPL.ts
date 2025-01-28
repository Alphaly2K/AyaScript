import { AyaScriptLexer } from "./ANTLR/AyaScriptLexer";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AyaScriptParser } from "./ANTLR/AyaScriptParser";
import { ASTBuilder } from "./Utils/ASTBuilder";
import { Interpreter } from "./Interpreter/Interpreter";

export function REPL(input: string) {
  const lexer = new AyaScriptLexer(CharStreams.fromString(input));
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new AyaScriptParser(tokenStream);

  const parseTree = parser.program();
  const astBuilder = new ASTBuilder();
  const ast = astBuilder.visitProgram(parseTree);

  const interpreter = new Interpreter();
  interpreter.execute(ast);
}
