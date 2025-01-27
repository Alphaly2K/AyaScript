// Generated from AyaScript.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { AyaScriptListener } from "./AyaScriptListener";
import { AyaScriptVisitor } from "./AyaScriptVisitor";

export class AyaScriptParser extends Parser {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly WS = 4;
  public static readonly INT = 5;
  public static readonly ASSIGN = 6;
  public static readonly SEMI = 7;
  public static readonly DOT = 8;
  public static readonly LBRACK = 9;
  public static readonly RBRACK = 10;
  public static readonly LPAREN = 11;
  public static readonly RPAREN = 12;
  public static readonly COMMA = 13;
  public static readonly EXPORT = 14;
  public static readonly VAR = 15;
  public static readonly FUNC = 16;
  public static readonly RETURN = 17;
  public static readonly IF = 18;
  public static readonly ELSE = 19;
  public static readonly WHILE = 20;
  public static readonly BREAK = 21;
  public static readonly CONTINUE = 22;
  public static readonly COLON = 23;
  public static readonly VOID = 24;
  public static readonly SEND = 25;
  public static readonly READ = 26;
  public static readonly ID = 27;
  public static readonly PLUS = 28;
  public static readonly MINUS = 29;
  public static readonly MULT = 30;
  public static readonly DIV = 31;
  public static readonly MOD = 32;
  public static readonly EQ = 33;
  public static readonly NEQ = 34;
  public static readonly GT = 35;
  public static readonly LT = 36;
  public static readonly GTE = 37;
  public static readonly LTE = 38;
  public static readonly AND = 39;
  public static readonly OR = 40;
  public static readonly NOT = 41;
  public static readonly INCREAMENT = 42;
  public static readonly DECREAMENT = 43;
  public static readonly STRING = 44;
  public static readonly COMMENT = 45;
  public static readonly RULE_program = 0;
  public static readonly RULE_statement = 1;
  public static readonly RULE_varDecl = 2;
  public static readonly RULE_funcDecl = 3;
  public static readonly RULE_assignStmt = 4;
  public static readonly RULE_funcCall = 5;
  public static readonly RULE_exportStmt = 6;
  public static readonly RULE_returnStmt = 7;
  public static readonly RULE_ifStmt = 8;
  public static readonly RULE_whileStmt = 9;
  public static readonly RULE_breakStmt = 10;
  public static readonly RULE_continueStmt = 11;
  public static readonly RULE_paramList = 12;
  public static readonly RULE_sendStmt = 13;
  public static readonly RULE_readStmt = 14;
  public static readonly RULE_param = 15;
  public static readonly RULE_expr = 16;
  public static readonly RULE_block = 17;
  public static readonly RULE_structOrUnionSpecifier = 18;
  public static readonly RULE_arrList = 19;
  public static readonly RULE_structOrUnion = 20;
  public static readonly RULE_structDeclarationList = 21;
  public static readonly RULE_structItem = 22;
  public static readonly RULE_lvalue = 23;
  public static readonly RULE_type = 24;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    "program",
    "statement",
    "varDecl",
    "funcDecl",
    "assignStmt",
    "funcCall",
    "exportStmt",
    "returnStmt",
    "ifStmt",
    "whileStmt",
    "breakStmt",
    "continueStmt",
    "paramList",
    "sendStmt",
    "readStmt",
    "param",
    "expr",
    "block",
    "structOrUnionSpecifier",
    "arrList",
    "structOrUnion",
    "structDeclarationList",
    "structItem",
    "lvalue",
    "type",
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'{'",
    "'}'",
    "'struct'",
    undefined,
    undefined,
    "'='",
    "';'",
    "'.'",
    "'['",
    "']'",
    "'('",
    "')'",
    "','",
    "'export'",
    "'var'",
    "'func'",
    "'return'",
    "'if'",
    "'else'",
    "'while'",
    "'break'",
    "'continue'",
    "':'",
    "'void'",
    "'send'",
    "'read'",
    undefined,
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'%'",
    "'=='",
    "'!='",
    "'>'",
    "'<'",
    "'>='",
    "'<='",
    "'&&'",
    "'||'",
    "'!'",
    "'++'",
    "'--'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    "WS",
    "INT",
    "ASSIGN",
    "SEMI",
    "DOT",
    "LBRACK",
    "RBRACK",
    "LPAREN",
    "RPAREN",
    "COMMA",
    "EXPORT",
    "VAR",
    "FUNC",
    "RETURN",
    "IF",
    "ELSE",
    "WHILE",
    "BREAK",
    "CONTINUE",
    "COLON",
    "VOID",
    "SEND",
    "READ",
    "ID",
    "PLUS",
    "MINUS",
    "MULT",
    "DIV",
    "MOD",
    "EQ",
    "NEQ",
    "GT",
    "LT",
    "GTE",
    "LTE",
    "AND",
    "OR",
    "NOT",
    "INCREAMENT",
    "DECREAMENT",
    "STRING",
    "COMMENT",
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    AyaScriptParser._LITERAL_NAMES,
    AyaScriptParser._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return AyaScriptParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return "AyaScript.g4";
  }

  // @Override
  public get ruleNames(): string[] {
    return AyaScriptParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return AyaScriptParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(AyaScriptParser._ATN, this);
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, AyaScriptParser.RULE_program);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 50;
              this.statement();
            }
          }
          this.state = 53;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << AyaScriptParser.INT) |
                (1 << AyaScriptParser.LBRACK) |
                (1 << AyaScriptParser.LPAREN) |
                (1 << AyaScriptParser.EXPORT) |
                (1 << AyaScriptParser.VAR) |
                (1 << AyaScriptParser.FUNC) |
                (1 << AyaScriptParser.RETURN) |
                (1 << AyaScriptParser.IF) |
                (1 << AyaScriptParser.WHILE) |
                (1 << AyaScriptParser.BREAK) |
                (1 << AyaScriptParser.CONTINUE) |
                (1 << AyaScriptParser.SEND) |
                (1 << AyaScriptParser.READ) |
                (1 << AyaScriptParser.ID))) !==
              0) ||
          _la === AyaScriptParser.NOT ||
          _la === AyaScriptParser.STRING
        );
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    let _localctx: StatementContext = new StatementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 2, AyaScriptParser.RULE_statement);
    try {
      this.state = 72;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 55;
            this.varDecl();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 56;
            this.funcDecl();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 57;
            this.assignStmt();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 58;
            this.funcCall();
            this.state = 59;
            this.match(AyaScriptParser.SEMI);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 61;
            this.exportStmt();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 62;
            this.returnStmt();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 63;
            this.ifStmt();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 64;
            this.whileStmt();
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 65;
            this.breakStmt();
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 66;
            this.continueStmt();
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 67;
            this.sendStmt();
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 68;
            this.readStmt();
          }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 69;
            this.expr(0);
            this.state = 70;
            this.match(AyaScriptParser.SEMI);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public varDecl(): VarDeclContext {
    let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, AyaScriptParser.RULE_varDecl);
    let _la: number;
    try {
      this.state = 90;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
        case 1:
          _localctx = new TypeInferenceVarDeclContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 74;
            this.match(AyaScriptParser.VAR);
            this.state = 75;
            this.match(AyaScriptParser.ID);
            this.state = 76;
            this.match(AyaScriptParser.ASSIGN);
            this.state = 77;
            this.expr(0);
            this.state = 78;
            this.match(AyaScriptParser.SEMI);
          }
          break;

        case 2:
          _localctx = new ExplicitVarDeclContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 80;
            this.match(AyaScriptParser.VAR);
            this.state = 81;
            this.match(AyaScriptParser.ID);
            this.state = 82;
            this.match(AyaScriptParser.COLON);
            this.state = 83;
            this.type();
            this.state = 86;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AyaScriptParser.ASSIGN) {
              {
                this.state = 84;
                this.match(AyaScriptParser.ASSIGN);
                this.state = 85;
                this.expr(0);
              }
            }

            this.state = 88;
            this.match(AyaScriptParser.SEMI);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public funcDecl(): FuncDeclContext {
    let _localctx: FuncDeclContext = new FuncDeclContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, AyaScriptParser.RULE_funcDecl);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 92;
        this.match(AyaScriptParser.FUNC);
        this.state = 93;
        this.match(AyaScriptParser.ID);
        this.state = 94;
        this.match(AyaScriptParser.LPAREN);
        this.state = 96;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AyaScriptParser.ID) {
          {
            this.state = 95;
            this.paramList();
          }
        }

        this.state = 98;
        this.match(AyaScriptParser.RPAREN);
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AyaScriptParser.COLON) {
          {
            this.state = 99;
            this.match(AyaScriptParser.COLON);
            this.state = 100;
            this.type();
          }
        }

        this.state = 103;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public assignStmt(): AssignStmtContext {
    let _localctx: AssignStmtContext = new AssignStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 8, AyaScriptParser.RULE_assignStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 105;
        this.lvalue(0);
        this.state = 106;
        this.match(AyaScriptParser.ASSIGN);
        this.state = 107;
        this.expr(0);
        this.state = 108;
        this.match(AyaScriptParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public funcCall(): FuncCallContext {
    let _localctx: FuncCallContext = new FuncCallContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, AyaScriptParser.RULE_funcCall);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 110;
        this.match(AyaScriptParser.ID);
        this.state = 111;
        this.match(AyaScriptParser.LPAREN);
        this.state = 120;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << AyaScriptParser.INT) |
                (1 << AyaScriptParser.LBRACK) |
                (1 << AyaScriptParser.LPAREN) |
                (1 << AyaScriptParser.ID))) !==
              0) ||
          _la === AyaScriptParser.NOT ||
          _la === AyaScriptParser.STRING
        ) {
          {
            this.state = 112;
            this.expr(0);
            this.state = 117;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === AyaScriptParser.COMMA) {
              {
                {
                  this.state = 113;
                  this.match(AyaScriptParser.COMMA);
                  this.state = 114;
                  this.expr(0);
                }
              }
              this.state = 119;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 122;
        this.match(AyaScriptParser.RPAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public exportStmt(): ExportStmtContext {
    let _localctx: ExportStmtContext = new ExportStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 12, AyaScriptParser.RULE_exportStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 124;
        this.match(AyaScriptParser.EXPORT);
        this.state = 127;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case AyaScriptParser.ID:
            {
              this.state = 125;
              this.match(AyaScriptParser.ID);
            }
            break;
          case AyaScriptParser.FUNC:
            {
              this.state = 126;
              this.funcDecl();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public returnStmt(): ReturnStmtContext {
    let _localctx: ReturnStmtContext = new ReturnStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 14, AyaScriptParser.RULE_returnStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 129;
        this.match(AyaScriptParser.RETURN);
        this.state = 130;
        this.expr(0);
        this.state = 131;
        this.match(AyaScriptParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public ifStmt(): IfStmtContext {
    let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, AyaScriptParser.RULE_ifStmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 133;
        this.match(AyaScriptParser.IF);
        this.state = 134;
        this.match(AyaScriptParser.LPAREN);
        this.state = 135;
        this.expr(0);
        this.state = 136;
        this.match(AyaScriptParser.RPAREN);
        this.state = 137;
        this.block();
        this.state = 140;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AyaScriptParser.ELSE) {
          {
            this.state = 138;
            this.match(AyaScriptParser.ELSE);
            this.state = 139;
            this.block();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public whileStmt(): WhileStmtContext {
    let _localctx: WhileStmtContext = new WhileStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 18, AyaScriptParser.RULE_whileStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 142;
        this.match(AyaScriptParser.WHILE);
        this.state = 143;
        this.match(AyaScriptParser.LPAREN);
        this.state = 144;
        this.expr(0);
        this.state = 145;
        this.match(AyaScriptParser.RPAREN);
        this.state = 146;
        this.block();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public breakStmt(): BreakStmtContext {
    let _localctx: BreakStmtContext = new BreakStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 20, AyaScriptParser.RULE_breakStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 148;
        this.match(AyaScriptParser.BREAK);
        this.state = 149;
        this.match(AyaScriptParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public continueStmt(): ContinueStmtContext {
    let _localctx: ContinueStmtContext = new ContinueStmtContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 22, AyaScriptParser.RULE_continueStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 151;
        this.match(AyaScriptParser.CONTINUE);
        this.state = 152;
        this.match(AyaScriptParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public paramList(): ParamListContext {
    let _localctx: ParamListContext = new ParamListContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 24, AyaScriptParser.RULE_paramList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 154;
        this.param();
        this.state = 159;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AyaScriptParser.COMMA) {
          {
            {
              this.state = 155;
              this.match(AyaScriptParser.COMMA);
              this.state = 156;
              this.param();
            }
          }
          this.state = 161;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public sendStmt(): SendStmtContext {
    let _localctx: SendStmtContext = new SendStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, AyaScriptParser.RULE_sendStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 162;
        this.match(AyaScriptParser.SEND);
        this.state = 163;
        this.match(AyaScriptParser.LPAREN);
        this.state = 164;
        this.expr(0);
        this.state = 165;
        this.match(AyaScriptParser.RPAREN);
        this.state = 166;
        this.match(AyaScriptParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public readStmt(): ReadStmtContext {
    let _localctx: ReadStmtContext = new ReadStmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, AyaScriptParser.RULE_readStmt);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 168;
        this.match(AyaScriptParser.READ);
        this.state = 169;
        this.match(AyaScriptParser.LPAREN);
        this.state = 170;
        this.expr(0);
        this.state = 171;
        this.match(AyaScriptParser.RPAREN);
        this.state = 172;
        this.match(AyaScriptParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public param(): ParamContext {
    let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, AyaScriptParser.RULE_param);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 174;
        this.match(AyaScriptParser.ID);
        this.state = 175;
        this.match(AyaScriptParser.COLON);
        this.state = 176;
        this.type();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public expr(): ExprContext;
  public expr(_p: number): ExprContext;
  // @RuleVersion(0)
  public expr(_p?: number): ExprContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
    let _prevctx: ExprContext = _localctx;
    let _startState: number = 32;
    this.enterRecursionRule(_localctx, 32, AyaScriptParser.RULE_expr, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 196;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
          case 1:
            {
              _localctx = new LogicalNotContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;

              this.state = 179;
              this.match(AyaScriptParser.NOT);
              this.state = 180;
              this.expr(9);
            }
            break;

          case 2:
            {
              _localctx = new ParenthesesContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 181;
              this.match(AyaScriptParser.LPAREN);
              this.state = 182;
              this.expr(0);
              this.state = 183;
              this.match(AyaScriptParser.RPAREN);
            }
            break;

          case 3:
            {
              _localctx = new VariableContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 185;
              this.lvalue(0);
            }
            break;

          case 4:
            {
              _localctx = new FunctionContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 186;
              this.funcCall();
            }
            break;

          case 5:
            {
              _localctx = new IntegerContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 187;
              this.match(AyaScriptParser.INT);
            }
            break;

          case 6:
            {
              _localctx = new StringContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 188;
              this.match(AyaScriptParser.STRING);
            }
            break;

          case 7:
            {
              _localctx = new IncrementContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 189;
              this.lvalue(0);
              this.state = 190;
              this.match(AyaScriptParser.INCREAMENT);
            }
            break;

          case 8:
            {
              _localctx = new DecrementContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 192;
              this.lvalue(0);
              this.state = 193;
              this.match(AyaScriptParser.DECREAMENT);
            }
            break;

          case 9:
            {
              _localctx = new ArrayListContext(_localctx);
              this._ctx = _localctx;
              _prevctx = _localctx;
              this.state = 195;
              this.arrList();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 239;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 237;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 12, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new MultiplicationContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 198;
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 22)"
                      );
                    }
                    this.state = 199;
                    this.match(AyaScriptParser.MULT);
                    this.state = 200;
                    this.expr(23);
                  }
                  break;

                case 2:
                  {
                    _localctx = new DivisionContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 201;
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 21)"
                      );
                    }
                    this.state = 202;
                    this.match(AyaScriptParser.DIV);
                    this.state = 203;
                    this.expr(22);
                  }
                  break;

                case 3:
                  {
                    _localctx = new ModulusContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 204;
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 20)"
                      );
                    }
                    this.state = 205;
                    this.match(AyaScriptParser.MOD);
                    this.state = 206;
                    this.expr(21);
                  }
                  break;

                case 4:
                  {
                    _localctx = new AdditionContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 207;
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 19)"
                      );
                    }
                    this.state = 208;
                    this.match(AyaScriptParser.PLUS);
                    this.state = 209;
                    this.expr(20);
                  }
                  break;

                case 5:
                  {
                    _localctx = new SubtractionContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 210;
                    if (!this.precpred(this._ctx, 18)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 18)"
                      );
                    }
                    this.state = 211;
                    this.match(AyaScriptParser.MINUS);
                    this.state = 212;
                    this.expr(19);
                  }
                  break;

                case 6:
                  {
                    _localctx = new GreaterThanContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 213;
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 17)"
                      );
                    }
                    this.state = 214;
                    this.match(AyaScriptParser.GT);
                    this.state = 215;
                    this.expr(18);
                  }
                  break;

                case 7:
                  {
                    _localctx = new LessThanContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 216;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 16)"
                      );
                    }
                    this.state = 217;
                    this.match(AyaScriptParser.LT);
                    this.state = 218;
                    this.expr(17);
                  }
                  break;

                case 8:
                  {
                    _localctx = new GreaterThanOrEqualContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 219;
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 15)"
                      );
                    }
                    this.state = 220;
                    this.match(AyaScriptParser.GTE);
                    this.state = 221;
                    this.expr(16);
                  }
                  break;

                case 9:
                  {
                    _localctx = new LessThanOrEqualContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 222;
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 14)"
                      );
                    }
                    this.state = 223;
                    this.match(AyaScriptParser.LTE);
                    this.state = 224;
                    this.expr(15);
                  }
                  break;

                case 10:
                  {
                    _localctx = new EqualContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 225;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 13)"
                      );
                    }
                    this.state = 226;
                    this.match(AyaScriptParser.EQ);
                    this.state = 227;
                    this.expr(14);
                  }
                  break;

                case 11:
                  {
                    _localctx = new NotEqualContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 228;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 12)"
                      );
                    }
                    this.state = 229;
                    this.match(AyaScriptParser.NEQ);
                    this.state = 230;
                    this.expr(13);
                  }
                  break;

                case 12:
                  {
                    _localctx = new LogicalAndContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 231;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 11)"
                      );
                    }
                    this.state = 232;
                    this.match(AyaScriptParser.AND);
                    this.state = 233;
                    this.expr(12);
                  }
                  break;

                case 13:
                  {
                    _localctx = new LogicalOrContext(
                      new ExprContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_expr
                    );
                    this.state = 234;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 10)"
                      );
                    }
                    this.state = 235;
                    this.match(AyaScriptParser.OR);
                    this.state = 236;
                    this.expr(11);
                  }
                  break;
              }
            }
          }
          this.state = 241;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public block(): BlockContext {
    let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, AyaScriptParser.RULE_block);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 242;
        this.match(AyaScriptParser.T__0);
        this.state = 246;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << AyaScriptParser.INT) |
                (1 << AyaScriptParser.LBRACK) |
                (1 << AyaScriptParser.LPAREN) |
                (1 << AyaScriptParser.EXPORT) |
                (1 << AyaScriptParser.VAR) |
                (1 << AyaScriptParser.FUNC) |
                (1 << AyaScriptParser.RETURN) |
                (1 << AyaScriptParser.IF) |
                (1 << AyaScriptParser.WHILE) |
                (1 << AyaScriptParser.BREAK) |
                (1 << AyaScriptParser.CONTINUE) |
                (1 << AyaScriptParser.SEND) |
                (1 << AyaScriptParser.READ) |
                (1 << AyaScriptParser.ID))) !==
              0) ||
          _la === AyaScriptParser.NOT ||
          _la === AyaScriptParser.STRING
        ) {
          {
            {
              this.state = 243;
              this.statement();
            }
          }
          this.state = 248;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 249;
        this.match(AyaScriptParser.T__1);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public structOrUnionSpecifier(): StructOrUnionSpecifierContext {
    let _localctx: StructOrUnionSpecifierContext =
      new StructOrUnionSpecifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, AyaScriptParser.RULE_structOrUnionSpecifier);
    let _la: number;
    try {
      this.state = 262;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 251;
            this.structOrUnion();
            this.state = 253;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AyaScriptParser.ID) {
              {
                this.state = 252;
                this.lvalue(0);
              }
            }

            this.state = 255;
            this.match(AyaScriptParser.T__0);
            this.state = 256;
            this.structDeclarationList();
            this.state = 257;
            this.match(AyaScriptParser.T__1);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 259;
            this.structOrUnion();
            this.state = 260;
            this.lvalue(0);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public arrList(): ArrListContext {
    let _localctx: ArrListContext = new ArrListContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, AyaScriptParser.RULE_arrList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 264;
        this.match(AyaScriptParser.LBRACK);
        this.state = 265;
        this.expr(0);
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 266;
              this.match(AyaScriptParser.COMMA);
              this.state = 267;
              this.expr(0);
            }
          }
          this.state = 270;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === AyaScriptParser.COMMA);
        this.state = 272;
        this.match(AyaScriptParser.RBRACK);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public structOrUnion(): StructOrUnionContext {
    let _localctx: StructOrUnionContext = new StructOrUnionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 40, AyaScriptParser.RULE_structOrUnion);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 274;
        this.match(AyaScriptParser.T__2);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public structDeclarationList(): StructDeclarationListContext {
    let _localctx: StructDeclarationListContext =
      new StructDeclarationListContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, AyaScriptParser.RULE_structDeclarationList);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 276;
        this.structItem();
        this.state = 280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AyaScriptParser.ID) {
          {
            {
              this.state = 277;
              this.structItem();
            }
          }
          this.state = 282;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public structItem(): StructItemContext {
    let _localctx: StructItemContext = new StructItemContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 44, AyaScriptParser.RULE_structItem);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 283;
        this.lvalue(0);
        this.state = 284;
        this.match(AyaScriptParser.COLON);
        this.state = 285;
        this.type();
        this.state = 286;
        this.match(AyaScriptParser.SEMI);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public lvalue(): LvalueContext;
  public lvalue(_p: number): LvalueContext;
  // @RuleVersion(0)
  public lvalue(_p?: number): LvalueContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: LvalueContext = new LvalueContext(this._ctx, _parentState);
    let _prevctx: LvalueContext = _localctx;
    let _startState: number = 46;
    this.enterRecursionRule(_localctx, 46, AyaScriptParser.RULE_lvalue, _p);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        {
          _localctx = new SimpleLValueContext(_localctx);
          this._ctx = _localctx;
          _prevctx = _localctx;

          this.state = 289;
          this.match(AyaScriptParser.ID);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 301;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 299;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 19, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new FieldAccessLValueContext(
                      new LvalueContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_lvalue
                    );
                    this.state = 291;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 2)"
                      );
                    }
                    this.state = 292;
                    this.match(AyaScriptParser.DOT);
                    this.state = 293;
                    this.match(AyaScriptParser.ID);
                  }
                  break;

                case 2:
                  {
                    _localctx = new ArrayAccessLValueContext(
                      new LvalueContext(_parentctx, _parentState)
                    );
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AyaScriptParser.RULE_lvalue
                    );
                    this.state = 294;
                    if (!this.precpred(this._ctx, 1)) {
                      throw this.createFailedPredicateException(
                        "this.precpred(this._ctx, 1)"
                      );
                    }
                    this.state = 295;
                    this.match(AyaScriptParser.LBRACK);
                    this.state = 296;
                    this.expr(0);
                    this.state = 297;
                    this.match(AyaScriptParser.RBRACK);
                  }
                  break;
              }
            }
          }
          this.state = 303;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type(): TypeContext {
    let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 48, AyaScriptParser.RULE_type);
    try {
      this.state = 311;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
        case 1:
          _localctx = new CommonTypeContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 304;
            this.match(AyaScriptParser.ID);
          }
          break;

        case 2:
          _localctx = new VoidTypeContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 305;
            this.match(AyaScriptParser.VOID);
          }
          break;

        case 3:
          _localctx = new ArrayTypeContext(_localctx);
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 306;
            this.match(AyaScriptParser.ID);
            this.state = 307;
            this.match(AyaScriptParser.LBRACK);
            this.state = 308;
            this.expr(0);
            this.state = 309;
            this.match(AyaScriptParser.RBRACK);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number
  ): boolean {
    switch (ruleIndex) {
      case 16:
        return this.expr_sempred(_localctx as ExprContext, predIndex);

      case 23:
        return this.lvalue_sempred(_localctx as LvalueContext, predIndex);
    }
    return true;
  }
  private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 22);

      case 1:
        return this.precpred(this._ctx, 21);

      case 2:
        return this.precpred(this._ctx, 20);

      case 3:
        return this.precpred(this._ctx, 19);

      case 4:
        return this.precpred(this._ctx, 18);

      case 5:
        return this.precpred(this._ctx, 17);

      case 6:
        return this.precpred(this._ctx, 16);

      case 7:
        return this.precpred(this._ctx, 15);

      case 8:
        return this.precpred(this._ctx, 14);

      case 9:
        return this.precpred(this._ctx, 13);

      case 10:
        return this.precpred(this._ctx, 12);

      case 11:
        return this.precpred(this._ctx, 11);

      case 12:
        return this.precpred(this._ctx, 10);
    }
    return true;
  }
  private lvalue_sempred(_localctx: LvalueContext, predIndex: number): boolean {
    switch (predIndex) {
      case 13:
        return this.precpred(this._ctx, 2);

      case 14:
        return this.precpred(this._ctx, 1);
    }
    return true;
  }

  public static readonly _serializedATN: string =
    "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u013C\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
    "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x06\x026\n\x02\r\x02\x0E" +
    "\x027\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x05\x03K\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04Y\n\x04\x03\x04\x03\x04" +
    "\x05\x04]\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05c\n\x05\x03\x05" +
    "\x03\x05\x03\x05\x05\x05h\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07v\n\x07" +
    "\f\x07\x0E\x07y\v\x07\x05\x07{\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
    "\x05\b\x82\n\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x05\n\x8F\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f" +
    "\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xA0\n\x0E\f\x0E" +
    "\x0E\x0E\xA3\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
    "\x12\x05\x12\xC7\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xF0\n\x12\f\x12" +
    "\x0E\x12\xF3\v\x12\x03\x13\x03\x13\x07\x13\xF7\n\x13\f\x13\x0E\x13\xFA" +
    "\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u0100\n\x14\x03\x14\x03" +
    "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0109\n\x14\x03\x15" +
    "\x03\x15\x03\x15\x03\x15\x06\x15\u010F\n\x15\r\x15\x0E\x15\u0110\x03\x15" +
    "\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x07\x17\u0119\n\x17\f\x17\x0E" +
    "\x17\u011C\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
    "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
    "\x07\x19\u012E\n\x19\f\x19\x0E\x19\u0131\v\x19\x03\x1A\x03\x1A\x03\x1A" +
    "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u013A\n\x1A\x03\x1A\x02\x02\x04" +
    '"0\x1B\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12' +
    '\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&' +
    "\x02(\x02*\x02,\x02.\x020\x022\x02\x02\x02\x02\u0156\x025\x03\x02\x02" +
    "\x02\x04J\x03\x02\x02\x02\x06\\\x03\x02\x02\x02\b^\x03\x02\x02\x02\nk" +
    "\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0E~\x03\x02\x02\x02\x10\x83\x03\x02" +
    "\x02\x02\x12\x87\x03\x02\x02\x02\x14\x90\x03\x02\x02\x02\x16\x96\x03\x02" +
    "\x02\x02\x18\x99\x03\x02\x02\x02\x1A\x9C\x03\x02\x02\x02\x1C\xA4\x03\x02" +
    '\x02\x02\x1E\xAA\x03\x02\x02\x02 \xB0\x03\x02\x02\x02"\xC6\x03\x02\x02' +
    "\x02$\xF4\x03\x02\x02\x02&\u0108\x03\x02\x02\x02(\u010A\x03\x02\x02\x02" +
    "*\u0114\x03\x02\x02\x02,\u0116\x03\x02\x02\x02.\u011D\x03\x02\x02\x02" +
    "0\u0122\x03\x02\x02\x022\u0139\x03\x02\x02\x0246\x05\x04\x03\x0254\x03" +
    "\x02\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\x03" +
    "\x03\x02\x02\x029K\x05\x06\x04\x02:K\x05\b\x05\x02;K\x05\n\x06\x02<=\x05" +
    "\f\x07\x02=>\x07\t\x02\x02>K\x03\x02\x02\x02?K\x05\x0E\b\x02@K\x05\x10" +
    "\t\x02AK\x05\x12\n\x02BK\x05\x14\v\x02CK\x05\x16\f\x02DK\x05\x18\r\x02" +
    'EK\x05\x1C\x0F\x02FK\x05\x1E\x10\x02GH\x05"\x12\x02HI\x07\t\x02\x02I' +
    "K\x03\x02\x02\x02J9\x03\x02\x02\x02J:\x03\x02\x02\x02J;\x03\x02\x02\x02" +
    "J<\x03\x02\x02\x02J?\x03\x02\x02\x02J@\x03\x02\x02\x02JA\x03\x02\x02\x02" +
    "JB\x03\x02\x02\x02JC\x03\x02\x02\x02JD\x03\x02\x02\x02JE\x03\x02\x02\x02" +
    "JF\x03\x02\x02\x02JG\x03\x02\x02\x02K\x05\x03\x02\x02\x02LM\x07\x11\x02" +
    '\x02MN\x07\x1D\x02\x02NO\x07\b\x02\x02OP\x05"\x12\x02PQ\x07\t\x02\x02' +
    "Q]\x03\x02\x02\x02RS\x07\x11\x02\x02ST\x07\x1D\x02\x02TU\x07\x19\x02\x02" +
    'UX\x052\x1A\x02VW\x07\b\x02\x02WY\x05"\x12\x02XV\x03\x02\x02\x02XY\x03' +
    "\x02\x02\x02YZ\x03\x02\x02\x02Z[\x07\t\x02\x02[]\x03\x02\x02\x02\\L\x03" +
    "\x02\x02\x02\\R\x03\x02\x02\x02]\x07\x03\x02\x02\x02^_\x07\x12\x02\x02" +
    "_`\x07\x1D\x02\x02`b\x07\r\x02\x02ac\x05\x1A\x0E\x02ba\x03\x02\x02\x02" +
    "bc\x03\x02\x02\x02cd\x03\x02\x02\x02dg\x07\x0E\x02\x02ef\x07\x19\x02\x02" +
    "fh\x052\x1A\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02" +
    "ij\x05$\x13\x02j\t\x03\x02\x02\x02kl\x050\x19\x02lm\x07\b\x02\x02mn\x05" +
    '"\x12\x02no\x07\t\x02\x02o\v\x03\x02\x02\x02pq\x07\x1D\x02\x02qz\x07' +
    '\r\x02\x02rw\x05"\x12\x02st\x07\x0F\x02\x02tv\x05"\x12\x02us\x03\x02' +
    "\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02x{\x03\x02" +
    "\x02\x02yw\x03\x02\x02\x02zr\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x03\x02" +
    "\x02\x02|}\x07\x0E\x02\x02}\r\x03\x02\x02\x02~\x81\x07\x10\x02\x02\x7F" +
    "\x82\x07\x1D\x02\x02\x80\x82\x05\b\x05\x02\x81\x7F\x03\x02\x02\x02\x81" +
    "\x80\x03\x02\x02\x02\x82\x0F\x03\x02\x02\x02\x83\x84\x07\x13\x02\x02\x84" +
    '\x85\x05"\x12\x02\x85\x86\x07\t\x02\x02\x86\x11\x03\x02\x02\x02\x87\x88' +
    '\x07\x14\x02\x02\x88\x89\x07\r\x02\x02\x89\x8A\x05"\x12\x02\x8A\x8B\x07' +
    "\x0E\x02\x02\x8B\x8E\x05$\x13\x02\x8C\x8D\x07\x15\x02\x02\x8D\x8F\x05" +
    "$\x13\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x13\x03" +
    "\x02\x02\x02\x90\x91\x07\x16\x02\x02\x91\x92\x07\r\x02\x02\x92\x93\x05" +
    '"\x12\x02\x93\x94\x07\x0E\x02\x02\x94\x95\x05$\x13\x02\x95\x15\x03\x02' +
    "\x02\x02\x96\x97\x07\x17\x02\x02\x97\x98\x07\t\x02\x02\x98\x17\x03\x02" +
    "\x02\x02\x99\x9A\x07\x18\x02\x02\x9A\x9B\x07\t\x02\x02\x9B\x19\x03\x02" +
    "\x02\x02\x9C\xA1\x05 \x11\x02\x9D\x9E\x07\x0F\x02\x02\x9E\xA0\x05 \x11" +
    "\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
    "\x02\xA1\xA2\x03\x02\x02\x02\xA2\x1B\x03\x02\x02\x02\xA3\xA1\x03\x02\x02" +
    '\x02\xA4\xA5\x07\x1B\x02\x02\xA5\xA6\x07\r\x02\x02\xA6\xA7\x05"\x12\x02' +
    "\xA7\xA8\x07\x0E\x02\x02\xA8\xA9\x07\t\x02\x02\xA9\x1D\x03\x02\x02\x02" +
    '\xAA\xAB\x07\x1C\x02\x02\xAB\xAC\x07\r\x02\x02\xAC\xAD\x05"\x12\x02\xAD' +
    "\xAE\x07\x0E\x02\x02\xAE\xAF\x07\t\x02\x02\xAF\x1F\x03\x02\x02\x02\xB0" +
    "\xB1\x07\x1D\x02\x02\xB1\xB2\x07\x19\x02\x02\xB2\xB3\x052\x1A\x02\xB3" +
    "!\x03\x02\x02\x02\xB4\xB5\b\x12\x01\x02\xB5\xB6\x07+\x02\x02\xB6\xC7\x05" +
    '"\x12\v\xB7\xB8\x07\r\x02\x02\xB8\xB9\x05"\x12\x02\xB9\xBA\x07\x0E\x02' +
    "\x02\xBA\xC7\x03\x02\x02\x02\xBB\xC7\x050\x19\x02\xBC\xC7\x05\f\x07\x02" +
    "\xBD\xC7\x07\x07\x02\x02\xBE\xC7\x07.\x02\x02\xBF\xC0\x050\x19\x02\xC0" +
    "\xC1\x07,\x02\x02\xC1\xC7\x03\x02\x02\x02\xC2\xC3\x050\x19\x02\xC3\xC4" +
    "\x07-\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC7\x05(\x15\x02\xC6\xB4\x03" +
    "\x02\x02\x02\xC6\xB7\x03\x02\x02\x02\xC6\xBB\x03\x02\x02\x02\xC6\xBC\x03" +
    "\x02\x02\x02\xC6\xBD\x03\x02\x02\x02\xC6\xBE\x03\x02\x02\x02\xC6\xBF\x03" +
    "\x02\x02\x02\xC6\xC2\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02\xC7\xF1\x03" +
    '\x02\x02\x02\xC8\xC9\f\x18\x02\x02\xC9\xCA\x07 \x02\x02\xCA\xF0\x05"' +
    '\x12\x19\xCB\xCC\f\x17\x02\x02\xCC\xCD\x07!\x02\x02\xCD\xF0\x05"\x12' +
    '\x18\xCE\xCF\f\x16\x02\x02\xCF\xD0\x07"\x02\x02\xD0\xF0\x05"\x12\x17' +
    '\xD1\xD2\f\x15\x02\x02\xD2\xD3\x07\x1E\x02\x02\xD3\xF0\x05"\x12\x16\xD4' +
    '\xD5\f\x14\x02\x02\xD5\xD6\x07\x1F\x02\x02\xD6\xF0\x05"\x12\x15\xD7\xD8' +
    '\f\x13\x02\x02\xD8\xD9\x07%\x02\x02\xD9\xF0\x05"\x12\x14\xDA\xDB\f\x12' +
    '\x02\x02\xDB\xDC\x07&\x02\x02\xDC\xF0\x05"\x12\x13\xDD\xDE\f\x11\x02' +
    "\x02\xDE\xDF\x07'\x02\x02\xDF\xF0\x05\"\x12\x12\xE0\xE1\f\x10\x02\x02" +
    '\xE1\xE2\x07(\x02\x02\xE2\xF0\x05"\x12\x11\xE3\xE4\f\x0F\x02\x02\xE4' +
    '\xE5\x07#\x02\x02\xE5\xF0\x05"\x12\x10\xE6\xE7\f\x0E\x02\x02\xE7\xE8' +
    '\x07$\x02\x02\xE8\xF0\x05"\x12\x0F\xE9\xEA\f\r\x02\x02\xEA\xEB\x07)\x02' +
    '\x02\xEB\xF0\x05"\x12\x0E\xEC\xED\f\f\x02\x02\xED\xEE\x07*\x02\x02\xEE' +
    '\xF0\x05"\x12\r\xEF\xC8\x03\x02\x02\x02\xEF\xCB\x03\x02\x02\x02\xEF\xCE' +
    "\x03\x02\x02\x02\xEF\xD1\x03\x02\x02\x02\xEF\xD4\x03\x02\x02\x02\xEF\xD7" +
    "\x03\x02\x02\x02\xEF\xDA\x03\x02\x02\x02\xEF\xDD\x03\x02\x02\x02\xEF\xE0" +
    "\x03\x02\x02\x02\xEF\xE3\x03\x02\x02\x02\xEF\xE6\x03\x02\x02\x02\xEF\xE9" +
    "\x03\x02\x02\x02\xEF\xEC\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF" +
    "\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2#\x03\x02\x02\x02\xF3\xF1" +
    "\x03\x02\x02\x02\xF4\xF8\x07\x03\x02\x02\xF5\xF7\x05\x04\x03\x02\xF6\xF5" +
    "\x03\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9" +
    "\x03\x02\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC" +
    "\x07\x04\x02\x02\xFC%\x03\x02\x02\x02\xFD\xFF\x05*\x16\x02\xFE\u0100\x05" +
    "0\x19\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101" +
    "\x03\x02\x02\x02\u0101\u0102\x07\x03\x02\x02\u0102\u0103\x05,\x17\x02" +
    "\u0103\u0104\x07\x04\x02\x02\u0104\u0109\x03\x02\x02\x02\u0105\u0106\x05" +
    "*\x16\x02\u0106\u0107\x050\x19\x02\u0107\u0109\x03\x02\x02\x02\u0108\xFD" +
    "\x03\x02\x02\x02\u0108\u0105\x03\x02\x02\x02\u0109'\x03\x02\x02\x02\u010A" +
    '\u010B\x07\v\x02\x02\u010B\u010E\x05"\x12\x02\u010C\u010D\x07\x0F\x02' +
    '\x02\u010D\u010F\x05"\x12\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0110' +
    "\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02" +
    "\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x07\f\x02\x02\u0113)\x03\x02" +
    "\x02\x02\u0114\u0115\x07\x05\x02\x02\u0115+\x03\x02\x02\x02\u0116\u011A" +
    "\x05.\x18\x02\u0117\u0119\x05.\x18\x02\u0118\u0117\x03\x02\x02\x02\u0119" +
    "\u011C\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02" +
    "\x02\x02\u011B-\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D\u011E" +
    "\x050\x19\x02\u011E\u011F\x07\x19\x02\x02\u011F\u0120\x052\x1A\x02\u0120" +
    "\u0121\x07\t\x02\x02\u0121/\x03\x02\x02\x02\u0122\u0123\b\x19\x01\x02" +
    "\u0123\u0124\x07\x1D\x02\x02\u0124\u012F\x03\x02\x02\x02\u0125\u0126\f" +
    "\x04\x02\x02\u0126\u0127\x07\n\x02\x02\u0127\u012E\x07\x1D\x02\x02\u0128" +
    '\u0129\f\x03\x02\x02\u0129\u012A\x07\v\x02\x02\u012A\u012B\x05"\x12\x02' +
    "\u012B\u012C\x07\f\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D\u0125\x03" +
    "\x02\x02\x02\u012D\u0128\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F" +
    "\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u01301\x03\x02\x02" +
    "\x02\u0131\u012F\x03\x02\x02\x02\u0132\u013A\x07\x1D\x02\x02\u0133\u013A" +
    "\x07\x1A\x02\x02\u0134\u0135\x07\x1D\x02\x02\u0135\u0136\x07\v\x02\x02" +
    '\u0136\u0137\x05"\x12\x02\u0137\u0138\x07\f\x02\x02\u0138\u013A\x03\x02' +
    "\x02\x02\u0139\u0132\x03\x02\x02\x02\u0139\u0133\x03\x02\x02\x02\u0139" +
    "\u0134\x03\x02\x02\x02\u013A3\x03\x02\x02\x02\x187JX\\bgwz\x81\x8E\xA1" +
    "\xC6\xEF\xF1\xF8\xFF\u0108\u0110\u011A\u012D\u012F\u0139";
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!AyaScriptParser.__ATN) {
      AyaScriptParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(AyaScriptParser._serializedATN)
      );
    }

    return AyaScriptParser.__ATN;
  }
}

export class ProgramContext extends ParserRuleContext {
  public statement(): StatementContext[];
  public statement(i: number): StatementContext;
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_program;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitProgram) {
      return visitor.visitProgram(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public varDecl(): VarDeclContext | undefined {
    return this.tryGetRuleContext(0, VarDeclContext);
  }
  public funcDecl(): FuncDeclContext | undefined {
    return this.tryGetRuleContext(0, FuncDeclContext);
  }
  public assignStmt(): AssignStmtContext | undefined {
    return this.tryGetRuleContext(0, AssignStmtContext);
  }
  public funcCall(): FuncCallContext | undefined {
    return this.tryGetRuleContext(0, FuncCallContext);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AyaScriptParser.SEMI, 0);
  }
  public exportStmt(): ExportStmtContext | undefined {
    return this.tryGetRuleContext(0, ExportStmtContext);
  }
  public returnStmt(): ReturnStmtContext | undefined {
    return this.tryGetRuleContext(0, ReturnStmtContext);
  }
  public ifStmt(): IfStmtContext | undefined {
    return this.tryGetRuleContext(0, IfStmtContext);
  }
  public whileStmt(): WhileStmtContext | undefined {
    return this.tryGetRuleContext(0, WhileStmtContext);
  }
  public breakStmt(): BreakStmtContext | undefined {
    return this.tryGetRuleContext(0, BreakStmtContext);
  }
  public continueStmt(): ContinueStmtContext | undefined {
    return this.tryGetRuleContext(0, ContinueStmtContext);
  }
  public sendStmt(): SendStmtContext | undefined {
    return this.tryGetRuleContext(0, SendStmtContext);
  }
  public readStmt(): ReadStmtContext | undefined {
    return this.tryGetRuleContext(0, ReadStmtContext);
  }
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_statement;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VarDeclContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_varDecl;
  }
  public copyFrom(ctx: VarDeclContext): void {
    super.copyFrom(ctx);
  }
}
export class TypeInferenceVarDeclContext extends VarDeclContext {
  public VAR(): TerminalNode {
    return this.getToken(AyaScriptParser.VAR, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(AyaScriptParser.ASSIGN, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  constructor(ctx: VarDeclContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterTypeInferenceVarDecl) {
      listener.enterTypeInferenceVarDecl(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitTypeInferenceVarDecl) {
      listener.exitTypeInferenceVarDecl(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitTypeInferenceVarDecl) {
      return visitor.visitTypeInferenceVarDecl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ExplicitVarDeclContext extends VarDeclContext {
  public VAR(): TerminalNode {
    return this.getToken(AyaScriptParser.VAR, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(AyaScriptParser.COLON, 0);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  public ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AyaScriptParser.ASSIGN, 0);
  }
  public expr(): ExprContext | undefined {
    return this.tryGetRuleContext(0, ExprContext);
  }
  constructor(ctx: VarDeclContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterExplicitVarDecl) {
      listener.enterExplicitVarDecl(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitExplicitVarDecl) {
      listener.exitExplicitVarDecl(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitExplicitVarDecl) {
      return visitor.visitExplicitVarDecl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FuncDeclContext extends ParserRuleContext {
  public FUNC(): TerminalNode {
    return this.getToken(AyaScriptParser.FUNC, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  public LPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.LPAREN, 0);
  }
  public RPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.RPAREN, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  public paramList(): ParamListContext | undefined {
    return this.tryGetRuleContext(0, ParamListContext);
  }
  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(AyaScriptParser.COLON, 0);
  }
  public type(): TypeContext | undefined {
    return this.tryGetRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_funcDecl;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterFuncDecl) {
      listener.enterFuncDecl(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitFuncDecl) {
      listener.exitFuncDecl(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitFuncDecl) {
      return visitor.visitFuncDecl(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AssignStmtContext extends ParserRuleContext {
  public lvalue(): LvalueContext {
    return this.getRuleContext(0, LvalueContext);
  }
  public ASSIGN(): TerminalNode {
    return this.getToken(AyaScriptParser.ASSIGN, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_assignStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterAssignStmt) {
      listener.enterAssignStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitAssignStmt) {
      listener.exitAssignStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitAssignStmt) {
      return visitor.visitAssignStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class FuncCallContext extends ParserRuleContext {
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  public LPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.LPAREN, 0);
  }
  public RPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.RPAREN, 0);
  }
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AyaScriptParser.COMMA);
    } else {
      return this.getToken(AyaScriptParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_funcCall;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterFuncCall) {
      listener.enterFuncCall(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitFuncCall) {
      listener.exitFuncCall(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitFuncCall) {
      return visitor.visitFuncCall(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExportStmtContext extends ParserRuleContext {
  public EXPORT(): TerminalNode {
    return this.getToken(AyaScriptParser.EXPORT, 0);
  }
  public ID(): TerminalNode | undefined {
    return this.tryGetToken(AyaScriptParser.ID, 0);
  }
  public funcDecl(): FuncDeclContext | undefined {
    return this.tryGetRuleContext(0, FuncDeclContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_exportStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterExportStmt) {
      listener.enterExportStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitExportStmt) {
      listener.exitExportStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitExportStmt) {
      return visitor.visitExportStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ReturnStmtContext extends ParserRuleContext {
  public RETURN(): TerminalNode {
    return this.getToken(AyaScriptParser.RETURN, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_returnStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterReturnStmt) {
      listener.enterReturnStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitReturnStmt) {
      listener.exitReturnStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitReturnStmt) {
      return visitor.visitReturnStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IfStmtContext extends ParserRuleContext {
  public IF(): TerminalNode {
    return this.getToken(AyaScriptParser.IF, 0);
  }
  public LPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.LPAREN, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public RPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.RPAREN, 0);
  }
  public block(): BlockContext[];
  public block(i: number): BlockContext;
  public block(i?: number): BlockContext | BlockContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BlockContext);
    } else {
      return this.getRuleContext(i, BlockContext);
    }
  }
  public ELSE(): TerminalNode | undefined {
    return this.tryGetToken(AyaScriptParser.ELSE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_ifStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterIfStmt) {
      listener.enterIfStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitIfStmt) {
      listener.exitIfStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitIfStmt) {
      return visitor.visitIfStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class WhileStmtContext extends ParserRuleContext {
  public WHILE(): TerminalNode {
    return this.getToken(AyaScriptParser.WHILE, 0);
  }
  public LPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.LPAREN, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public RPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.RPAREN, 0);
  }
  public block(): BlockContext {
    return this.getRuleContext(0, BlockContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_whileStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterWhileStmt) {
      listener.enterWhileStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitWhileStmt) {
      listener.exitWhileStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitWhileStmt) {
      return visitor.visitWhileStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BreakStmtContext extends ParserRuleContext {
  public BREAK(): TerminalNode {
    return this.getToken(AyaScriptParser.BREAK, 0);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_breakStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterBreakStmt) {
      listener.enterBreakStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitBreakStmt) {
      listener.exitBreakStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitBreakStmt) {
      return visitor.visitBreakStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ContinueStmtContext extends ParserRuleContext {
  public CONTINUE(): TerminalNode {
    return this.getToken(AyaScriptParser.CONTINUE, 0);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_continueStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterContinueStmt) {
      listener.enterContinueStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitContinueStmt) {
      listener.exitContinueStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitContinueStmt) {
      return visitor.visitContinueStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParamListContext extends ParserRuleContext {
  public param(): ParamContext[];
  public param(i: number): ParamContext;
  public param(i?: number): ParamContext | ParamContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ParamContext);
    } else {
      return this.getRuleContext(i, ParamContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AyaScriptParser.COMMA);
    } else {
      return this.getToken(AyaScriptParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_paramList;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterParamList) {
      listener.enterParamList(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitParamList) {
      listener.exitParamList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitParamList) {
      return visitor.visitParamList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class SendStmtContext extends ParserRuleContext {
  public SEND(): TerminalNode {
    return this.getToken(AyaScriptParser.SEND, 0);
  }
  public LPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.LPAREN, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public RPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.RPAREN, 0);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_sendStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterSendStmt) {
      listener.enterSendStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitSendStmt) {
      listener.exitSendStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitSendStmt) {
      return visitor.visitSendStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ReadStmtContext extends ParserRuleContext {
  public READ(): TerminalNode {
    return this.getToken(AyaScriptParser.READ, 0);
  }
  public LPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.LPAREN, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public RPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.RPAREN, 0);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_readStmt;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterReadStmt) {
      listener.enterReadStmt(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitReadStmt) {
      listener.exitReadStmt(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitReadStmt) {
      return visitor.visitReadStmt(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ParamContext extends ParserRuleContext {
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  public COLON(): TerminalNode {
    return this.getToken(AyaScriptParser.COLON, 0);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_param;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterParam) {
      listener.enterParam(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitParam) {
      listener.exitParam(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitParam) {
      return visitor.visitParam(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExprContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_expr;
  }
  public copyFrom(ctx: ExprContext): void {
    super.copyFrom(ctx);
  }
}
export class MultiplicationContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public MULT(): TerminalNode {
    return this.getToken(AyaScriptParser.MULT, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterMultiplication) {
      listener.enterMultiplication(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitMultiplication) {
      listener.exitMultiplication(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitMultiplication) {
      return visitor.visitMultiplication(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DivisionContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public DIV(): TerminalNode {
    return this.getToken(AyaScriptParser.DIV, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterDivision) {
      listener.enterDivision(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitDivision) {
      listener.exitDivision(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitDivision) {
      return visitor.visitDivision(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ModulusContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public MOD(): TerminalNode {
    return this.getToken(AyaScriptParser.MOD, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterModulus) {
      listener.enterModulus(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitModulus) {
      listener.exitModulus(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitModulus) {
      return visitor.visitModulus(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class AdditionContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public PLUS(): TerminalNode {
    return this.getToken(AyaScriptParser.PLUS, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterAddition) {
      listener.enterAddition(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitAddition) {
      listener.exitAddition(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitAddition) {
      return visitor.visitAddition(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class SubtractionContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public MINUS(): TerminalNode {
    return this.getToken(AyaScriptParser.MINUS, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterSubtraction) {
      listener.enterSubtraction(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitSubtraction) {
      listener.exitSubtraction(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitSubtraction) {
      return visitor.visitSubtraction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class GreaterThanContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public GT(): TerminalNode {
    return this.getToken(AyaScriptParser.GT, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterGreaterThan) {
      listener.enterGreaterThan(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitGreaterThan) {
      listener.exitGreaterThan(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitGreaterThan) {
      return visitor.visitGreaterThan(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LessThanContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public LT(): TerminalNode {
    return this.getToken(AyaScriptParser.LT, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterLessThan) {
      listener.enterLessThan(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitLessThan) {
      listener.exitLessThan(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitLessThan) {
      return visitor.visitLessThan(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class GreaterThanOrEqualContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public GTE(): TerminalNode {
    return this.getToken(AyaScriptParser.GTE, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterGreaterThanOrEqual) {
      listener.enterGreaterThanOrEqual(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitGreaterThanOrEqual) {
      listener.exitGreaterThanOrEqual(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitGreaterThanOrEqual) {
      return visitor.visitGreaterThanOrEqual(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LessThanOrEqualContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public LTE(): TerminalNode {
    return this.getToken(AyaScriptParser.LTE, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterLessThanOrEqual) {
      listener.enterLessThanOrEqual(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitLessThanOrEqual) {
      listener.exitLessThanOrEqual(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitLessThanOrEqual) {
      return visitor.visitLessThanOrEqual(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class EqualContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public EQ(): TerminalNode {
    return this.getToken(AyaScriptParser.EQ, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterEqual) {
      listener.enterEqual(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitEqual) {
      listener.exitEqual(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitEqual) {
      return visitor.visitEqual(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class NotEqualContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public NEQ(): TerminalNode {
    return this.getToken(AyaScriptParser.NEQ, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterNotEqual) {
      listener.enterNotEqual(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitNotEqual) {
      listener.exitNotEqual(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitNotEqual) {
      return visitor.visitNotEqual(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LogicalAndContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public AND(): TerminalNode {
    return this.getToken(AyaScriptParser.AND, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterLogicalAnd) {
      listener.enterLogicalAnd(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitLogicalAnd) {
      listener.exitLogicalAnd(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitLogicalAnd) {
      return visitor.visitLogicalAnd(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LogicalOrContext extends ExprContext {
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public OR(): TerminalNode {
    return this.getToken(AyaScriptParser.OR, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterLogicalOr) {
      listener.enterLogicalOr(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitLogicalOr) {
      listener.exitLogicalOr(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitLogicalOr) {
      return visitor.visitLogicalOr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class LogicalNotContext extends ExprContext {
  public NOT(): TerminalNode {
    return this.getToken(AyaScriptParser.NOT, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterLogicalNot) {
      listener.enterLogicalNot(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitLogicalNot) {
      listener.exitLogicalNot(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitLogicalNot) {
      return visitor.visitLogicalNot(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ParenthesesContext extends ExprContext {
  public LPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.LPAREN, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public RPAREN(): TerminalNode {
    return this.getToken(AyaScriptParser.RPAREN, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterParentheses) {
      listener.enterParentheses(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitParentheses) {
      listener.exitParentheses(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitParentheses) {
      return visitor.visitParentheses(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class VariableContext extends ExprContext {
  public lvalue(): LvalueContext {
    return this.getRuleContext(0, LvalueContext);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterVariable) {
      listener.enterVariable(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitVariable) {
      listener.exitVariable(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitVariable) {
      return visitor.visitVariable(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FunctionContext extends ExprContext {
  public funcCall(): FuncCallContext {
    return this.getRuleContext(0, FuncCallContext);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterFunction) {
      listener.enterFunction(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitFunction) {
      listener.exitFunction(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitFunction) {
      return visitor.visitFunction(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class IntegerContext extends ExprContext {
  public INT(): TerminalNode {
    return this.getToken(AyaScriptParser.INT, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterInteger) {
      listener.enterInteger(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitInteger) {
      listener.exitInteger(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitInteger) {
      return visitor.visitInteger(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class StringContext extends ExprContext {
  public STRING(): TerminalNode {
    return this.getToken(AyaScriptParser.STRING, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterString) {
      listener.enterString(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitString) {
      listener.exitString(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitString) {
      return visitor.visitString(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class IncrementContext extends ExprContext {
  public lvalue(): LvalueContext {
    return this.getRuleContext(0, LvalueContext);
  }
  public INCREAMENT(): TerminalNode {
    return this.getToken(AyaScriptParser.INCREAMENT, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterIncrement) {
      listener.enterIncrement(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitIncrement) {
      listener.exitIncrement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitIncrement) {
      return visitor.visitIncrement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class DecrementContext extends ExprContext {
  public lvalue(): LvalueContext {
    return this.getRuleContext(0, LvalueContext);
  }
  public DECREAMENT(): TerminalNode {
    return this.getToken(AyaScriptParser.DECREAMENT, 0);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterDecrement) {
      listener.enterDecrement(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitDecrement) {
      listener.exitDecrement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitDecrement) {
      return visitor.visitDecrement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ArrayListContext extends ExprContext {
  public arrList(): ArrListContext {
    return this.getRuleContext(0, ArrListContext);
  }
  constructor(ctx: ExprContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterArrayList) {
      listener.enterArrayList(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitArrayList) {
      listener.exitArrayList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitArrayList) {
      return visitor.visitArrayList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockContext extends ParserRuleContext {
  public statement(): StatementContext[];
  public statement(i: number): StatementContext;
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_block;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterBlock) {
      listener.enterBlock(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitBlock) {
      listener.exitBlock(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitBlock) {
      return visitor.visitBlock(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructOrUnionSpecifierContext extends ParserRuleContext {
  public structOrUnion(): StructOrUnionContext {
    return this.getRuleContext(0, StructOrUnionContext);
  }
  public structDeclarationList(): StructDeclarationListContext | undefined {
    return this.tryGetRuleContext(0, StructDeclarationListContext);
  }
  public lvalue(): LvalueContext | undefined {
    return this.tryGetRuleContext(0, LvalueContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_structOrUnionSpecifier;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterStructOrUnionSpecifier) {
      listener.enterStructOrUnionSpecifier(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitStructOrUnionSpecifier) {
      listener.exitStructOrUnionSpecifier(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitStructOrUnionSpecifier) {
      return visitor.visitStructOrUnionSpecifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ArrListContext extends ParserRuleContext {
  public LBRACK(): TerminalNode {
    return this.getToken(AyaScriptParser.LBRACK, 0);
  }
  public expr(): ExprContext[];
  public expr(i: number): ExprContext;
  public expr(i?: number): ExprContext | ExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExprContext);
    } else {
      return this.getRuleContext(i, ExprContext);
    }
  }
  public RBRACK(): TerminalNode {
    return this.getToken(AyaScriptParser.RBRACK, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AyaScriptParser.COMMA);
    } else {
      return this.getToken(AyaScriptParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_arrList;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterArrList) {
      listener.enterArrList(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitArrList) {
      listener.exitArrList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitArrList) {
      return visitor.visitArrList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructOrUnionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_structOrUnion;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterStructOrUnion) {
      listener.enterStructOrUnion(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitStructOrUnion) {
      listener.exitStructOrUnion(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitStructOrUnion) {
      return visitor.visitStructOrUnion(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructDeclarationListContext extends ParserRuleContext {
  public structItem(): StructItemContext[];
  public structItem(i: number): StructItemContext;
  public structItem(i?: number): StructItemContext | StructItemContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StructItemContext);
    } else {
      return this.getRuleContext(i, StructItemContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_structDeclarationList;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterStructDeclarationList) {
      listener.enterStructDeclarationList(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitStructDeclarationList) {
      listener.exitStructDeclarationList(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitStructDeclarationList) {
      return visitor.visitStructDeclarationList(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StructItemContext extends ParserRuleContext {
  public lvalue(): LvalueContext {
    return this.getRuleContext(0, LvalueContext);
  }
  public COLON(): TerminalNode {
    return this.getToken(AyaScriptParser.COLON, 0);
  }
  public type(): TypeContext {
    return this.getRuleContext(0, TypeContext);
  }
  public SEMI(): TerminalNode {
    return this.getToken(AyaScriptParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_structItem;
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterStructItem) {
      listener.enterStructItem(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitStructItem) {
      listener.exitStructItem(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitStructItem) {
      return visitor.visitStructItem(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class LvalueContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_lvalue;
  }
  public copyFrom(ctx: LvalueContext): void {
    super.copyFrom(ctx);
  }
}
export class SimpleLValueContext extends LvalueContext {
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  constructor(ctx: LvalueContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterSimpleLValue) {
      listener.enterSimpleLValue(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitSimpleLValue) {
      listener.exitSimpleLValue(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitSimpleLValue) {
      return visitor.visitSimpleLValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class FieldAccessLValueContext extends LvalueContext {
  public lvalue(): LvalueContext {
    return this.getRuleContext(0, LvalueContext);
  }
  public DOT(): TerminalNode {
    return this.getToken(AyaScriptParser.DOT, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  constructor(ctx: LvalueContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterFieldAccessLValue) {
      listener.enterFieldAccessLValue(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitFieldAccessLValue) {
      listener.exitFieldAccessLValue(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitFieldAccessLValue) {
      return visitor.visitFieldAccessLValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ArrayAccessLValueContext extends LvalueContext {
  public lvalue(): LvalueContext {
    return this.getRuleContext(0, LvalueContext);
  }
  public LBRACK(): TerminalNode {
    return this.getToken(AyaScriptParser.LBRACK, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public RBRACK(): TerminalNode {
    return this.getToken(AyaScriptParser.RBRACK, 0);
  }
  constructor(ctx: LvalueContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterArrayAccessLValue) {
      listener.enterArrayAccessLValue(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitArrayAccessLValue) {
      listener.exitArrayAccessLValue(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitArrayAccessLValue) {
      return visitor.visitArrayAccessLValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class TypeContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AyaScriptParser.RULE_type;
  }
  public copyFrom(ctx: TypeContext): void {
    super.copyFrom(ctx);
  }
}
export class CommonTypeContext extends TypeContext {
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  constructor(ctx: TypeContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterCommonType) {
      listener.enterCommonType(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitCommonType) {
      listener.exitCommonType(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitCommonType) {
      return visitor.visitCommonType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class VoidTypeContext extends TypeContext {
  public VOID(): TerminalNode {
    return this.getToken(AyaScriptParser.VOID, 0);
  }
  constructor(ctx: TypeContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterVoidType) {
      listener.enterVoidType(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitVoidType) {
      listener.exitVoidType(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitVoidType) {
      return visitor.visitVoidType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
export class ArrayTypeContext extends TypeContext {
  public ID(): TerminalNode {
    return this.getToken(AyaScriptParser.ID, 0);
  }
  public LBRACK(): TerminalNode {
    return this.getToken(AyaScriptParser.LBRACK, 0);
  }
  public expr(): ExprContext {
    return this.getRuleContext(0, ExprContext);
  }
  public RBRACK(): TerminalNode {
    return this.getToken(AyaScriptParser.RBRACK, 0);
  }
  constructor(ctx: TypeContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AyaScriptListener): void {
    if (listener.enterArrayType) {
      listener.enterArrayType(this);
    }
  }
  // @Override
  public exitRule(listener: AyaScriptListener): void {
    if (listener.exitArrayType) {
      listener.exitArrayType(this);
    }
  }
  // @Override
  public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
    if (visitor.visitArrayType) {
      return visitor.visitArrayType(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}
