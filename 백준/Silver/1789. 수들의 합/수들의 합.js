const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const S = Number(input);
let N = 0;
let sum = 0;

while (sum <= S) {
	N++;
	sum += N;
}

console.log(N - 1);