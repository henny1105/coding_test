const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let result = 0;
let summary = 0;

for (let i = 0; i < num; i++) {
	summary += arr[i];
	result += summary;
}

console.log(result);
