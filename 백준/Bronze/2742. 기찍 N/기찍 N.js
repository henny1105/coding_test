const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
let arr = [];

for (let i = num; i >= 1; i--) {
	arr.push(i);
}

console.log(arr.join('\n'));