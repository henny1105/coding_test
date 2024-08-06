const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num = Number(input[0]);
let arr = [];

for (let i = 1; i <= num; i++) {
	arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

console.log(arr.join('\n'));