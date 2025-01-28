import { REPL } from "./REPL";

const code = `
func add(a: int, b: int): int
{
     send(a);
     while(0==0){
        send(a);
        if(a==a){
        break;
        }
     }
     return a+b+1;
}
var a = 2;
var b: int[5] = [1,2,3,4,5];
var c = [1,2,3];
var d = ["a\\\\a\\"a","bbb"];
a--;
send(b[3]+b[1]);
send(d[0]);
send(add(1,2));
send(a);
`;
REPL(code)
