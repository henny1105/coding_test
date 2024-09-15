const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
let arr = [];

for (let i = 1; i <= num; i++) {
	arr.push(i);
}

console.log(arr.join('\n'));