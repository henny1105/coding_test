const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let N = 3;
let result = [];

for (let i = 1; i <= num; i++) {
	let arr = input[i].split(' ').map(Number);
	arr.sort((a, b) => b - a);

	result.push(arr[N - 1]);
}

console.log(result.join('\n'));