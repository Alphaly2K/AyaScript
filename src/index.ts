import {repl} from "./repl";

const code = `
func add(a: int, b: int): int
{
     send(a+b);
     while(0==0){
        send(a+b);
        if(a==a){break;}
        
     }
     return a+b+1;
}
var a = 2;
a--;
send(add(1,2));
send(a);
`;
console.log(repl(code));
