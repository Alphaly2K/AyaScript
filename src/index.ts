import {repl} from "./repl";

const code = `
func add(a: int, b: int): int{
    send(a+b);
    a
}
var i = 2;
if (0 == 0) {
    send(i);
}
add(1,2);
send(i--);
send(i);
send(15699);
`;
console.log(repl(code));