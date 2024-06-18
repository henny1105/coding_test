const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const inputNum = Number(input[0]);
const longCount = Math.floor(inputNum / 4);
let result = '';

for (let i = 1; i <= longCount; i++) {
	result += 'long ';
}

result += 'int';

console.log(result);