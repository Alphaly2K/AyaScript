type FuncHandler = (args?: any) => any;
export function sendFunc(args: string[]) {
    args.forEach((arg) => {
        console.log(arg);
    })
}
export function readFunc(address: number[]): any {

}
export class FuncProcessor {
    private handlers: Map<string, FuncHandler>;

    constructor() {
        this.handlers = new Map();
        this.handlers.set("send", sendFunc);
        this.handlers.set("read", readFunc);
    }

    has(name: string): boolean {
        return this.handlers.has(name);
    }

    execute(name: string, args?: any[]): any {
        const handler = this.handlers.get(name);
        if (handler) {
            return handler(args)
        }
        return null;
    }
}