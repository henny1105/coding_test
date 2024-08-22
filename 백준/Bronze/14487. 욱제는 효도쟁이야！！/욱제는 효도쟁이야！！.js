const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let sum = 0;

for (let i = 0; i <= N - 1; i++) {
	sum += arr[i];
}

let max = Math.max(...arr);

console.log(sum - max);
