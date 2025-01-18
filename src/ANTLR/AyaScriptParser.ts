// Generated from AyaScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
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
	public static readonly WS = 3;
	public static readonly INT = 4;
	public static readonly ASSIGN = 5;
	public static readonly SEMI = 6;
	public static readonly DOT = 7;
	public static readonly LBRACK = 8;
	public static readonly RBRACK = 9;
	public static readonly LPAREN = 10;
	public static readonly RPAREN = 11;
	public static readonly COMMA = 12;
	public static readonly EXPORT = 13;
	public static readonly VAR = 14;
	public static readonly FUNC = 15;
	public static readonly RETURN = 16;
	public static readonly IF = 17;
	public static readonly ELSE = 18;
	public static readonly WHILE = 19;
	public static readonly BREAK = 20;
	public static readonly CONTINUE = 21;
	public static readonly COLON = 22;
	public static readonly VOID = 23;
	public static readonly SEND = 24;
	public static readonly READ = 25;
	public static readonly ID = 26;
	public static readonly PLUS = 27;
	public static readonly MINUS = 28;
	public static readonly MULT = 29;
	public static readonly DIV = 30;
	public static readonly MOD = 31;
	public static readonly EQ = 32;
	public static readonly NEQ = 33;
	public static readonly GT = 34;
	public static readonly LT = 35;
	public static readonly GTE = 36;
	public static readonly LTE = 37;
	public static readonly AND = 38;
	public static readonly OR = 39;
	public static readonly NOT = 40;
	public static readonly INCREAMENT = 41;
	public static readonly DECREAMENT = 42;
	public static readonly STRING = 43;
	public static readonly COMMENT = 44;
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
	public static readonly RULE_lvalue = 12;
	public static readonly RULE_paramList = 13;
	public static readonly RULE_sendStmt = 14;
	public static readonly RULE_readStmt = 15;
	public static readonly RULE_param = 16;
	public static readonly RULE_incrementExpr = 17;
	public static readonly RULE_decrementExpr = 18;
	public static readonly RULE_expr = 19;
	public static readonly RULE_block = 20;
	public static readonly RULE_type = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "varDecl", "funcDecl", "assignStmt", "funcCall", 
		"exportStmt", "returnStmt", "ifStmt", "whileStmt", "breakStmt", "continueStmt", 
		"lvalue", "paramList", "sendStmt", "readStmt", "param", "incrementExpr", 
		"decrementExpr", "expr", "block", "type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", undefined, undefined, "'='", "';'", "'.'", "'['", 
		"']'", "'('", "')'", "','", "'export'", "'var'", "'func'", "'return'", 
		"'if'", "'else'", "'while'", "'break'", "'continue'", "':'", "'void'", 
		"'send'", "'read'", undefined, "'+'", "'-'", "'*'", "'/'", "'%'", "'=='", 
		"'!='", "'>'", "'<'", "'>='", "'<='", "'&&'", "'||'", "'!'", "'++'", "'--'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "WS", "INT", "ASSIGN", "SEMI", "DOT", 
		"LBRACK", "RBRACK", "LPAREN", "RPAREN", "COMMA", "EXPORT", "VAR", "FUNC", 
		"RETURN", "IF", "ELSE", "WHILE", "BREAK", "CONTINUE", "COLON", "VOID", 
		"SEND", "READ", "ID", "PLUS", "MINUS", "MULT", "DIV", "MOD", "EQ", "NEQ", 
		"GT", "LT", "GTE", "LTE", "AND", "OR", "NOT", "INCREAMENT", "DECREAMENT", 
		"STRING", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AyaScriptParser._LITERAL_NAMES, AyaScriptParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AyaScriptParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "AyaScript.g4"; }

	// @Override
	public get ruleNames(): string[] { return AyaScriptParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AyaScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
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
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 44;
				this.statement();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AyaScriptParser.EXPORT) | (1 << AyaScriptParser.VAR) | (1 << AyaScriptParser.FUNC) | (1 << AyaScriptParser.RETURN) | (1 << AyaScriptParser.IF) | (1 << AyaScriptParser.WHILE) | (1 << AyaScriptParser.BREAK) | (1 << AyaScriptParser.CONTINUE) | (1 << AyaScriptParser.SEND) | (1 << AyaScriptParser.READ) | (1 << AyaScriptParser.ID))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AyaScriptParser.RULE_statement);
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.varDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 50;
				this.funcDecl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 51;
				this.assignStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 52;
				this.funcCall();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 53;
				this.exportStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 54;
				this.returnStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 55;
				this.ifStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 56;
				this.whileStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 57;
				this.breakStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 58;
				this.continueStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 59;
				this.sendStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 60;
				this.readStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 61;
				this.incrementExpr();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 62;
				this.decrementExpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(AyaScriptParser.VAR);
			this.state = 66;
			this.match(AyaScriptParser.ID);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AyaScriptParser.ASSIGN) {
				{
				this.state = 67;
				this.match(AyaScriptParser.ASSIGN);
				this.state = 68;
				this.expr(0);
				}
			}

			this.state = 71;
			this.match(AyaScriptParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 73;
			this.match(AyaScriptParser.FUNC);
			this.state = 74;
			this.match(AyaScriptParser.ID);
			this.state = 75;
			this.match(AyaScriptParser.LPAREN);
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AyaScriptParser.ID) {
				{
				this.state = 76;
				this.paramList();
				}
			}

			this.state = 79;
			this.match(AyaScriptParser.RPAREN);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AyaScriptParser.COLON) {
				{
				this.state = 80;
				this.match(AyaScriptParser.COLON);
				this.state = 81;
				this.type();
				}
			}

			this.state = 84;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStmt(): AssignStmtContext {
		let _localctx: AssignStmtContext = new AssignStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AyaScriptParser.RULE_assignStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.lvalue();
			this.state = 87;
			this.match(AyaScriptParser.ASSIGN);
			this.state = 88;
			this.expr(0);
			this.state = 89;
			this.match(AyaScriptParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 91;
			this.match(AyaScriptParser.ID);
			this.state = 92;
			this.match(AyaScriptParser.LPAREN);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AyaScriptParser.INT) | (1 << AyaScriptParser.LPAREN) | (1 << AyaScriptParser.ID))) !== 0) || _la === AyaScriptParser.NOT || _la === AyaScriptParser.STRING) {
				{
				this.state = 93;
				this.expr(0);
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === AyaScriptParser.COMMA) {
					{
					{
					this.state = 94;
					this.match(AyaScriptParser.COMMA);
					this.state = 95;
					this.expr(0);
					}
					}
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 103;
			this.match(AyaScriptParser.RPAREN);
			this.state = 104;
			this.match(AyaScriptParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStmt(): ExportStmtContext {
		let _localctx: ExportStmtContext = new ExportStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AyaScriptParser.RULE_exportStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(AyaScriptParser.EXPORT);
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AyaScriptParser.ID:
				{
				this.state = 107;
				this.match(AyaScriptParser.ID);
				}
				break;
			case AyaScriptParser.FUNC:
				{
				this.state = 108;
				this.funcDecl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AyaScriptParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(AyaScriptParser.RETURN);
			this.state = 112;
			this.expr(0);
			this.state = 113;
			this.match(AyaScriptParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
			this.state = 115;
			this.match(AyaScriptParser.IF);
			this.state = 116;
			this.match(AyaScriptParser.LPAREN);
			this.state = 117;
			this.expr(0);
			this.state = 118;
			this.match(AyaScriptParser.RPAREN);
			this.state = 119;
			this.block();
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AyaScriptParser.ELSE) {
				{
				this.state = 120;
				this.match(AyaScriptParser.ELSE);
				this.state = 121;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let _localctx: WhileStmtContext = new WhileStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AyaScriptParser.RULE_whileStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.match(AyaScriptParser.WHILE);
			this.state = 125;
			this.match(AyaScriptParser.LPAREN);
			this.state = 126;
			this.expr(0);
			this.state = 127;
			this.match(AyaScriptParser.RPAREN);
			this.state = 128;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStmt(): BreakStmtContext {
		let _localctx: BreakStmtContext = new BreakStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AyaScriptParser.RULE_breakStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(AyaScriptParser.BREAK);
			this.state = 131;
			this.match(AyaScriptParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStmt(): ContinueStmtContext {
		let _localctx: ContinueStmtContext = new ContinueStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AyaScriptParser.RULE_continueStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(AyaScriptParser.CONTINUE);
			this.state = 134;
			this.match(AyaScriptParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lvalue(): LvalueContext {
		let _localctx: LvalueContext = new LvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AyaScriptParser.RULE_lvalue);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(AyaScriptParser.ID);
			this.state = 145;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 143;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case AyaScriptParser.DOT:
						{
						this.state = 137;
						this.match(AyaScriptParser.DOT);
						this.state = 138;
						this.match(AyaScriptParser.ID);
						}
						break;
					case AyaScriptParser.LBRACK:
						{
						this.state = 139;
						this.match(AyaScriptParser.LBRACK);
						this.state = 140;
						this.expr(0);
						this.state = 141;
						this.match(AyaScriptParser.RBRACK);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AyaScriptParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.param();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AyaScriptParser.COMMA) {
				{
				{
				this.state = 149;
				this.match(AyaScriptParser.COMMA);
				this.state = 150;
				this.param();
				}
				}
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sendStmt(): SendStmtContext {
		let _localctx: SendStmtContext = new SendStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AyaScriptParser.RULE_sendStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(AyaScriptParser.SEND);
			this.state = 157;
			this.match(AyaScriptParser.LPAREN);
			this.state = 158;
			this.expr(0);
			this.state = 159;
			this.match(AyaScriptParser.RPAREN);
			this.state = 160;
			this.match(AyaScriptParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public readStmt(): ReadStmtContext {
		let _localctx: ReadStmtContext = new ReadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AyaScriptParser.RULE_readStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(AyaScriptParser.READ);
			this.state = 163;
			this.match(AyaScriptParser.LPAREN);
			this.state = 164;
			this.expr(0);
			this.state = 165;
			this.match(AyaScriptParser.RPAREN);
			this.state = 166;
			this.match(AyaScriptParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AyaScriptParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(AyaScriptParser.ID);
			this.state = 169;
			this.match(AyaScriptParser.COLON);
			this.state = 170;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incrementExpr(): IncrementExprContext {
		let _localctx: IncrementExprContext = new IncrementExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AyaScriptParser.RULE_incrementExpr);
		try {
			_localctx = new IncrementContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(AyaScriptParser.ID);
			this.state = 173;
			this.match(AyaScriptParser.INCREAMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decrementExpr(): DecrementExprContext {
		let _localctx: DecrementExprContext = new DecrementExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AyaScriptParser.RULE_decrementExpr);
		try {
			_localctx = new DecrementContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(AyaScriptParser.ID);
			this.state = 176;
			this.match(AyaScriptParser.DECREAMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
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
		let _startState: number = 38;
		this.enterRecursionRule(_localctx, 38, AyaScriptParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 179;
				this.match(AyaScriptParser.NOT);
				this.state = 180;
				this.expr(6);
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
				this.lvalue();
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
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 232;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 230;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicationContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 191;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 192;
						this.match(AyaScriptParser.MULT);
						this.state = 193;
						this.expr(20);
						}
						break;

					case 2:
						{
						_localctx = new DivisionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 194;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 195;
						this.match(AyaScriptParser.DIV);
						this.state = 196;
						this.expr(19);
						}
						break;

					case 3:
						{
						_localctx = new ModulusContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 197;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 198;
						this.match(AyaScriptParser.MOD);
						this.state = 199;
						this.expr(18);
						}
						break;

					case 4:
						{
						_localctx = new AdditionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 200;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 201;
						this.match(AyaScriptParser.PLUS);
						this.state = 202;
						this.expr(17);
						}
						break;

					case 5:
						{
						_localctx = new SubtractionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 203;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 204;
						this.match(AyaScriptParser.MINUS);
						this.state = 205;
						this.expr(16);
						}
						break;

					case 6:
						{
						_localctx = new GreaterThanContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 206;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 207;
						this.match(AyaScriptParser.GT);
						this.state = 208;
						this.expr(15);
						}
						break;

					case 7:
						{
						_localctx = new LessThanContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 209;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 210;
						this.match(AyaScriptParser.LT);
						this.state = 211;
						this.expr(14);
						}
						break;

					case 8:
						{
						_localctx = new GreaterThanOrEqualContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 212;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 213;
						this.match(AyaScriptParser.GTE);
						this.state = 214;
						this.expr(13);
						}
						break;

					case 9:
						{
						_localctx = new LessThanOrEqualContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 215;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 216;
						this.match(AyaScriptParser.LTE);
						this.state = 217;
						this.expr(12);
						}
						break;

					case 10:
						{
						_localctx = new EqualContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 218;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 219;
						this.match(AyaScriptParser.EQ);
						this.state = 220;
						this.expr(11);
						}
						break;

					case 11:
						{
						_localctx = new NotEqualContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 221;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 222;
						this.match(AyaScriptParser.NEQ);
						this.state = 223;
						this.expr(10);
						}
						break;

					case 12:
						{
						_localctx = new LogicalAndContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 224;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 225;
						this.match(AyaScriptParser.AND);
						this.state = 226;
						this.expr(9);
						}
						break;

					case 13:
						{
						_localctx = new LogicalOrContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, AyaScriptParser.RULE_expr);
						this.state = 227;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 228;
						this.match(AyaScriptParser.OR);
						this.state = 229;
						this.expr(8);
						}
						break;
					}
					}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AyaScriptParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(AyaScriptParser.T__0);
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << AyaScriptParser.EXPORT) | (1 << AyaScriptParser.VAR) | (1 << AyaScriptParser.FUNC) | (1 << AyaScriptParser.RETURN) | (1 << AyaScriptParser.IF) | (1 << AyaScriptParser.WHILE) | (1 << AyaScriptParser.BREAK) | (1 << AyaScriptParser.CONTINUE) | (1 << AyaScriptParser.SEND) | (1 << AyaScriptParser.READ) | (1 << AyaScriptParser.ID))) !== 0)) {
				{
				{
				this.state = 236;
				this.statement();
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 242;
			this.match(AyaScriptParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AyaScriptParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			_la = this._input.LA(1);
			if (!(_la === AyaScriptParser.VOID || _la === AyaScriptParser.ID)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 19:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 19);

		case 1:
			return this.precpred(this._ctx, 18);

		case 2:
			return this.precpred(this._ctx, 17);

		case 3:
			return this.precpred(this._ctx, 16);

		case 4:
			return this.precpred(this._ctx, 15);

		case 5:
			return this.precpred(this._ctx, 14);

		case 6:
			return this.precpred(this._ctx, 13);

		case 7:
			return this.precpred(this._ctx, 12);

		case 8:
			return this.precpred(this._ctx, 11);

		case 9:
			return this.precpred(this._ctx, 10);

		case 10:
			return this.precpred(this._ctx, 9);

		case 11:
			return this.precpred(this._ctx, 8);

		case 12:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\xF9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x06\x020\n\x02\r\x02\x0E\x021\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03B\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04H\n\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05P\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05U\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07c\n\x07\f" +
		"\x07\x0E\x07f\v\x07\x05\x07h\n\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b" +
		"\x03\b\x05\bp\n\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n}\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\x92\n\x0E\f\x0E\x0E\x0E\x95\v\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x07\x0F\x9A\n\x0F\f\x0F\x0E\x0F\x9D\v\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\xC0\n\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x07\x15\xE9\n\x15\f\x15\x0E\x15\xEC\v\x15\x03\x16\x03\x16\x07\x16\xF0" +
		"\n\x16\f\x16\x0E\x16\xF3\v\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x02\x02\x03(\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02\x02\x03\x04\x02\x19\x19\x1C\x1C\x02\u010D\x02" +
		"/\x03\x02\x02\x02\x04A\x03\x02\x02\x02\x06C\x03\x02\x02\x02\bK\x03\x02" +
		"\x02\x02\nX\x03\x02\x02\x02\f]\x03\x02\x02\x02\x0El\x03\x02\x02\x02\x10" +
		"q\x03\x02\x02\x02\x12u\x03\x02\x02\x02\x14~\x03\x02\x02\x02\x16\x84\x03" +
		"\x02\x02\x02\x18\x87\x03\x02\x02\x02\x1A\x8A\x03\x02\x02\x02\x1C\x96\x03" +
		"\x02\x02\x02\x1E\x9E\x03\x02\x02\x02 \xA4\x03\x02\x02\x02\"\xAA\x03\x02" +
		"\x02\x02$\xAE\x03\x02\x02\x02&\xB1\x03\x02\x02\x02(\xBF\x03\x02\x02\x02" +
		"*\xED\x03\x02\x02\x02,\xF6\x03\x02\x02\x02.0\x05\x04\x03\x02/.\x03\x02" +
		"\x02\x0201\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x03\x03" +
		"\x02\x02\x023B\x05\x06\x04\x024B\x05\b\x05\x025B\x05\n\x06\x026B\x05\f" +
		"\x07\x027B\x05\x0E\b\x028B\x05\x10\t\x029B\x05\x12\n\x02:B\x05\x14\v\x02" +
		";B\x05\x16\f\x02<B\x05\x18\r\x02=B\x05\x1E\x10\x02>B\x05 \x11\x02?B\x05" +
		"$\x13\x02@B\x05&\x14\x02A3\x03\x02\x02\x02A4\x03\x02\x02\x02A5\x03\x02" +
		"\x02\x02A6\x03\x02\x02\x02A7\x03\x02\x02\x02A8\x03\x02\x02\x02A9\x03\x02" +
		"\x02\x02A:\x03\x02\x02\x02A;\x03\x02\x02\x02A<\x03\x02\x02\x02A=\x03\x02" +
		"\x02\x02A>\x03\x02\x02\x02A?\x03\x02\x02\x02A@\x03\x02\x02\x02B\x05\x03" +
		"\x02\x02\x02CD\x07\x10\x02\x02DG\x07\x1C\x02\x02EF\x07\x07\x02\x02FH\x05" +
		"(\x15\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x07" +
		"\b\x02\x02J\x07\x03\x02\x02\x02KL\x07\x11\x02\x02LM\x07\x1C\x02\x02MO" +
		"\x07\f\x02\x02NP\x05\x1C\x0F\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02P" +
		"Q\x03\x02\x02\x02QT\x07\r\x02\x02RS\x07\x18\x02\x02SU\x05,\x17\x02TR\x03" +
		"\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x05*\x16\x02W\t\x03" +
		"\x02\x02\x02XY\x05\x1A\x0E\x02YZ\x07\x07\x02\x02Z[\x05(\x15\x02[\\\x07" +
		"\b\x02\x02\\\v\x03\x02\x02\x02]^\x07\x1C\x02\x02^g\x07\f\x02\x02_d\x05" +
		"(\x15\x02`a\x07\x0E\x02\x02ac\x05(\x15\x02b`\x03\x02\x02\x02cf\x03\x02" +
		"\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02" +
		"\x02\x02g_\x03\x02\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x07\r" +
		"\x02\x02jk\x07\b\x02\x02k\r\x03\x02\x02\x02lo\x07\x0F\x02\x02mp\x07\x1C" +
		"\x02\x02np\x05\b\x05\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\x0F\x03" +
		"\x02\x02\x02qr\x07\x12\x02\x02rs\x05(\x15\x02st\x07\b\x02\x02t\x11\x03" +
		"\x02\x02\x02uv\x07\x13\x02\x02vw\x07\f\x02\x02wx\x05(\x15\x02xy\x07\r" +
		"\x02\x02y|\x05*\x16\x02z{\x07\x14\x02\x02{}\x05*\x16\x02|z\x03\x02\x02" +
		"\x02|}\x03\x02\x02\x02}\x13\x03\x02\x02\x02~\x7F\x07\x15\x02\x02\x7F\x80" +
		"\x07\f\x02\x02\x80\x81\x05(\x15\x02\x81\x82\x07\r\x02\x02\x82\x83\x05" +
		"*\x16\x02\x83\x15\x03\x02\x02\x02\x84\x85\x07\x16\x02\x02\x85\x86\x07" +
		"\b\x02\x02\x86\x17\x03\x02\x02\x02\x87\x88\x07\x17\x02\x02\x88\x89\x07" +
		"\b\x02\x02\x89\x19\x03\x02\x02\x02\x8A\x93\x07\x1C\x02\x02\x8B\x8C\x07" +
		"\t\x02\x02\x8C\x92\x07\x1C\x02\x02\x8D\x8E\x07\n\x02\x02\x8E\x8F\x05(" +
		"\x15\x02\x8F\x90\x07\v\x02\x02\x90\x92\x03\x02\x02\x02\x91\x8B\x03\x02" +
		"\x02\x02\x91\x8D\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02" +
		"\x02\x02\x93\x94\x03\x02\x02\x02\x94\x1B\x03\x02\x02\x02\x95\x93\x03\x02" +
		"\x02\x02\x96\x9B\x05\"\x12\x02\x97\x98\x07\x0E\x02\x02\x98\x9A\x05\"\x12" +
		"\x02\x99\x97\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02" +
		"\x02\x9B\x9C\x03\x02\x02\x02\x9C\x1D\x03\x02\x02\x02\x9D\x9B\x03\x02\x02" +
		"\x02\x9E\x9F\x07\x1A\x02\x02\x9F\xA0\x07\f\x02\x02\xA0\xA1\x05(\x15\x02" +
		"\xA1\xA2\x07\r\x02\x02\xA2\xA3\x07\b\x02\x02\xA3\x1F\x03\x02\x02\x02\xA4" +
		"\xA5\x07\x1B\x02\x02\xA5\xA6\x07\f\x02\x02\xA6\xA7\x05(\x15\x02\xA7\xA8" +
		"\x07\r\x02\x02\xA8\xA9\x07\b\x02\x02\xA9!\x03\x02\x02\x02\xAA\xAB\x07" +
		"\x1C\x02\x02\xAB\xAC\x07\x18\x02\x02\xAC\xAD\x05,\x17\x02\xAD#\x03\x02" +
		"\x02\x02\xAE\xAF\x07\x1C\x02\x02\xAF\xB0\x07+\x02\x02\xB0%\x03\x02\x02" +
		"\x02\xB1\xB2\x07\x1C\x02\x02\xB2\xB3\x07,\x02\x02\xB3\'\x03\x02\x02\x02" +
		"\xB4\xB5\b\x15\x01\x02\xB5\xB6\x07*\x02\x02\xB6\xC0\x05(\x15\b\xB7\xB8" +
		"\x07\f\x02\x02\xB8\xB9\x05(\x15\x02\xB9\xBA\x07\r\x02\x02\xBA\xC0\x03" +
		"\x02\x02\x02\xBB\xC0\x05\x1A\x0E\x02\xBC\xC0\x05\f\x07\x02\xBD\xC0\x07" +
		"\x06\x02\x02\xBE\xC0\x07-\x02\x02\xBF\xB4\x03\x02\x02\x02\xBF\xB7\x03" +
		"\x02\x02\x02\xBF\xBB\x03\x02\x02\x02\xBF\xBC\x03\x02\x02\x02\xBF\xBD\x03" +
		"\x02\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0\xEA\x03\x02\x02\x02\xC1\xC2\f" +
		"\x15\x02\x02\xC2\xC3\x07\x1F\x02\x02\xC3\xE9\x05(\x15\x16\xC4\xC5\f\x14" +
		"\x02\x02\xC5\xC6\x07 \x02\x02\xC6\xE9\x05(\x15\x15\xC7\xC8\f\x13\x02\x02" +
		"\xC8\xC9\x07!\x02\x02\xC9\xE9\x05(\x15\x14\xCA\xCB\f\x12\x02\x02\xCB\xCC" +
		"\x07\x1D\x02\x02\xCC\xE9\x05(\x15\x13\xCD\xCE\f\x11\x02\x02\xCE\xCF\x07" +
		"\x1E\x02\x02\xCF\xE9\x05(\x15\x12\xD0\xD1\f\x10\x02\x02\xD1\xD2\x07$\x02" +
		"\x02\xD2\xE9\x05(\x15\x11\xD3\xD4\f\x0F\x02\x02\xD4\xD5\x07%\x02\x02\xD5" +
		"\xE9\x05(\x15\x10\xD6\xD7\f\x0E\x02\x02\xD7\xD8\x07&\x02\x02\xD8\xE9\x05" +
		"(\x15\x0F\xD9\xDA\f\r\x02\x02\xDA\xDB\x07\'\x02\x02\xDB\xE9\x05(\x15\x0E" +
		"\xDC\xDD\f\f\x02\x02\xDD\xDE\x07\"\x02\x02\xDE\xE9\x05(\x15\r\xDF\xE0" +
		"\f\v\x02\x02\xE0\xE1\x07#\x02\x02\xE1\xE9\x05(\x15\f\xE2\xE3\f\n\x02\x02" +
		"\xE3\xE4\x07(\x02\x02\xE4\xE9\x05(\x15\v\xE5\xE6\f\t\x02\x02\xE6\xE7\x07" +
		")\x02\x02\xE7\xE9\x05(\x15\n\xE8\xC1\x03\x02\x02\x02\xE8\xC4\x03\x02\x02" +
		"\x02\xE8\xC7\x03\x02\x02\x02\xE8\xCA\x03\x02\x02\x02\xE8\xCD\x03\x02\x02" +
		"\x02\xE8\xD0\x03\x02\x02\x02\xE8\xD3\x03\x02\x02\x02\xE8\xD6\x03\x02\x02" +
		"\x02\xE8\xD9\x03\x02\x02\x02\xE8\xDC\x03\x02\x02\x02\xE8\xDF\x03\x02\x02" +
		"\x02\xE8\xE2\x03\x02\x02\x02\xE8\xE5\x03\x02\x02\x02\xE9\xEC\x03\x02\x02" +
		"\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB)\x03\x02\x02" +
		"\x02\xEC\xEA\x03\x02\x02\x02\xED\xF1\x07\x03\x02\x02\xEE\xF0\x05\x04\x03" +
		"\x02\xEF\xEE\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02" +
		"\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x03\x02\x02\x02\xF3\xF1\x03\x02\x02" +
		"\x02\xF4\xF5\x07\x04\x02\x02\xF5+\x03\x02\x02\x02\xF6\xF7\t\x02\x02\x02" +
		"\xF7-\x03\x02\x02\x02\x121AGOTdgo|\x91\x93\x9B\xBF\xE8\xEA\xF1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AyaScriptParser.__ATN) {
			AyaScriptParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AyaScriptParser._serializedATN));
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
	public get ruleIndex(): number { return AyaScriptParser.RULE_program; }
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
	public incrementExpr(): IncrementExprContext | undefined {
		return this.tryGetRuleContext(0, IncrementExprContext);
	}
	public decrementExpr(): DecrementExprContext | undefined {
		return this.tryGetRuleContext(0, DecrementExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_statement; }
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
	public VAR(): TerminalNode { return this.getToken(AyaScriptParser.VAR, 0); }
	public ID(): TerminalNode { return this.getToken(AyaScriptParser.ID, 0); }
	public SEMI(): TerminalNode { return this.getToken(AyaScriptParser.SEMI, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(AyaScriptParser.ASSIGN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: AyaScriptListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: AyaScriptListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncDeclContext extends ParserRuleContext {
	public FUNC(): TerminalNode { return this.getToken(AyaScriptParser.FUNC, 0); }
	public ID(): TerminalNode { return this.getToken(AyaScriptParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AyaScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(AyaScriptParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(AyaScriptParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_funcDecl; }
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
	public ASSIGN(): TerminalNode { return this.getToken(AyaScriptParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode { return this.getToken(AyaScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_assignStmt; }
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
	public ID(): TerminalNode { return this.getToken(AyaScriptParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AyaScriptParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(AyaScriptParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(AyaScriptParser.SEMI, 0); }
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
	public get ruleIndex(): number { return AyaScriptParser.RULE_funcCall; }
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
	public EXPORT(): TerminalNode { return this.getToken(AyaScriptParser.EXPORT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(AyaScriptParser.ID, 0); }
	public funcDecl(): FuncDeclContext | undefined {
		return this.tryGetRuleContext(0, FuncDeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_exportStmt; }
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
	public RETURN(): TerminalNode { return this.getToken(AyaScriptParser.RETURN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode { return this.getToken(AyaScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_returnStmt; }
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
	public IF(): TerminalNode { return this.getToken(AyaScriptParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AyaScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(AyaScriptParser.RPAREN, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(AyaScriptParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_ifStmt; }
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
	public WHILE(): TerminalNode { return this.getToken(AyaScriptParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AyaScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(AyaScriptParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_whileStmt; }
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
	public BREAK(): TerminalNode { return this.getToken(AyaScriptParser.BREAK, 0); }
	public SEMI(): TerminalNode { return this.getToken(AyaScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_breakStmt; }
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
	public CONTINUE(): TerminalNode { return this.getToken(AyaScriptParser.CONTINUE, 0); }
	public SEMI(): TerminalNode { return this.getToken(AyaScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_continueStmt; }
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


export class LvalueContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AyaScriptParser.ID);
		} else {
			return this.getToken(AyaScriptParser.ID, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AyaScriptParser.DOT);
		} else {
			return this.getToken(AyaScriptParser.DOT, i);
		}
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AyaScriptParser.LBRACK);
		} else {
			return this.getToken(AyaScriptParser.LBRACK, i);
		}
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
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AyaScriptParser.RBRACK);
		} else {
			return this.getToken(AyaScriptParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_lvalue; }
	// @Override
	public enterRule(listener: AyaScriptListener): void {
		if (listener.enterLvalue) {
			listener.enterLvalue(this);
		}
	}
	// @Override
	public exitRule(listener: AyaScriptListener): void {
		if (listener.exitLvalue) {
			listener.exitLvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
		if (visitor.visitLvalue) {
			return visitor.visitLvalue(this);
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
	public get ruleIndex(): number { return AyaScriptParser.RULE_paramList; }
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
	public SEND(): TerminalNode { return this.getToken(AyaScriptParser.SEND, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AyaScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(AyaScriptParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(AyaScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_sendStmt; }
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
	public READ(): TerminalNode { return this.getToken(AyaScriptParser.READ, 0); }
	public LPAREN(): TerminalNode { return this.getToken(AyaScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(AyaScriptParser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(AyaScriptParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_readStmt; }
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
	public ID(): TerminalNode { return this.getToken(AyaScriptParser.ID, 0); }
	public COLON(): TerminalNode { return this.getToken(AyaScriptParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_param; }
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


export class IncrementExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_incrementExpr; }
	public copyFrom(ctx: IncrementExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IncrementContext extends IncrementExprContext {
	public ID(): TerminalNode { return this.getToken(AyaScriptParser.ID, 0); }
	public INCREAMENT(): TerminalNode { return this.getToken(AyaScriptParser.INCREAMENT, 0); }
	constructor(ctx: IncrementExprContext) {
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


export class DecrementExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_decrementExpr; }
	public copyFrom(ctx: DecrementExprContext): void {
		super.copyFrom(ctx);
	}
}
export class DecrementContext extends DecrementExprContext {
	public ID(): TerminalNode { return this.getToken(AyaScriptParser.ID, 0); }
	public DECREAMENT(): TerminalNode { return this.getToken(AyaScriptParser.DECREAMENT, 0); }
	constructor(ctx: DecrementExprContext) {
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


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_expr; }
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
	public MULT(): TerminalNode { return this.getToken(AyaScriptParser.MULT, 0); }
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
	public DIV(): TerminalNode { return this.getToken(AyaScriptParser.DIV, 0); }
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
	public MOD(): TerminalNode { return this.getToken(AyaScriptParser.MOD, 0); }
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
	public PLUS(): TerminalNode { return this.getToken(AyaScriptParser.PLUS, 0); }
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
	public MINUS(): TerminalNode { return this.getToken(AyaScriptParser.MINUS, 0); }
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
	public GT(): TerminalNode { return this.getToken(AyaScriptParser.GT, 0); }
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
	public LT(): TerminalNode { return this.getToken(AyaScriptParser.LT, 0); }
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
	public GTE(): TerminalNode { return this.getToken(AyaScriptParser.GTE, 0); }
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
	public LTE(): TerminalNode { return this.getToken(AyaScriptParser.LTE, 0); }
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
	public EQ(): TerminalNode { return this.getToken(AyaScriptParser.EQ, 0); }
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
	public NEQ(): TerminalNode { return this.getToken(AyaScriptParser.NEQ, 0); }
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
	public AND(): TerminalNode { return this.getToken(AyaScriptParser.AND, 0); }
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
	public OR(): TerminalNode { return this.getToken(AyaScriptParser.OR, 0); }
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
	public NOT(): TerminalNode { return this.getToken(AyaScriptParser.NOT, 0); }
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
	public LPAREN(): TerminalNode { return this.getToken(AyaScriptParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(AyaScriptParser.RPAREN, 0); }
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
	public INT(): TerminalNode { return this.getToken(AyaScriptParser.INT, 0); }
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
	public STRING(): TerminalNode { return this.getToken(AyaScriptParser.STRING, 0); }
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
	public get ruleIndex(): number { return AyaScriptParser.RULE_block; }
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


export class TypeContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(AyaScriptParser.ID, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(AyaScriptParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AyaScriptParser.RULE_type; }
	// @Override
	public enterRule(listener: AyaScriptListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: AyaScriptListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: AyaScriptVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


