type Instruction = {
    opcode: string;
    args: number[];
};

class Hakurei {
    private memory: number[];
    private stack: number[];
    private registers: {
        pc: number;
        sp: number;
        fp: number;
    };
    private program: Instruction[];
    private running: boolean;

    constructor(memorySize: number) {
        this.memory = new Array(memorySize).fill(0);
        this.stack = [];
        this.registers = {
            pc: 0,
            sp: -1,
            fp: -1,
        };
        this.program = [];
        this.running = false;
    }

    loadProgram(program: Instruction[]) {
        this.program = program;
    }

    run() {
        this.running = true;
        while (this.running) {
            const instruction = this.program[this.registers.pc];
            if (!instruction) {
                throw new Error(`Invalid instruction at PC=${this.registers.pc}`);
            }
            this.execute(instruction);
        }
    }

    private execute(instruction: Instruction) {
        const { opcode, args } = instruction;
        switch (opcode) {
            case "PUSH":
                this.stack.push(args[0]);
                this.registers.sp++;
                break;

            case "POP":
                if (this.registers.sp === 0) throw new Error("Stack underflow");
                this.registers.sp--;
                this.stack.pop();
                break;

            case "LOAD":
                this.stack.push(this.memory[args[0]]);
                this.registers.sp++;
                break;

            case "STORE":
                if (this.registers.sp === 0) throw new Error("Stack underflow");
                const value = this.stack.pop();
                this.memory[args[0]] = value!;
                this.registers.sp--;
                break;

            case "ADD":
                if (this.stack.length < 2) throw new Error("Stack underflow");
                const b = this.stack.pop()!;
                const a = this.stack.pop()!;
                this.stack.push(a + b);
                break;

            case "SUB":
                if (this.stack.length < 2) throw new Error("Stack underflow");
                const y = this.stack.pop()!;
                const x = this.stack.pop()!;
                this.stack.push(x - y);
                break;

            case "MUL":
                if (this.stack.length < 2) throw new Error("Stack underflow");
                const d = this.stack.pop()!;
                const c = this.stack.pop()!;
                this.stack.push(c * d);
                break;

            case "DIV":
                if (this.stack.length < 2) throw new Error("Stack underflow");
                const divisor = this.stack.pop()!;
                const dividend = this.stack.pop()!;
                if (divisor === 0) throw new Error("Division by zero");
                this.stack.push(dividend / divisor);
                break;

            case "JMP":
                this.registers.pc = args[0] - 1;
                break;

            case "JZ":
                if (this.stack.pop() === 0) {
                    this.registers.pc = args[0] - 1;
                }
                break;

            case "CALL":
                this.stack.push(this.registers.pc + 1);
                this.registers.sp++;
                this.registers.pc = args[0] - 1;
                break;

            case "RET":
                this.registers.pc = this.stack.pop()!;
                this.registers.sp--;
                break;

            case "HALT":
                this.running = false;
                break;

            default:
                throw new Error(`Unknown opcode: ${opcode}`);
        }

        this.registers.pc++;
    }
}
