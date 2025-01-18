import {repl} from "./repl";

const code = `
var i = 2;
i--;
send(i--);
send(15699);
if (0 == 0) {
    send(i);
}
`;
console.log(repl(code));
/* Todo
* 修改一下左值和右值的部分
*  */