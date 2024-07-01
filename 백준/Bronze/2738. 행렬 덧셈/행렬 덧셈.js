const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const a = [];
const b = [];

for (let i = 1; i <= N; i++) {
	a.push(input[i].split(' ').map(Number));
}

for (let k = N + 1; k < input.length; k++) {
	b.push(input[k].split(' ').map(Number));
}

let result = Array.from(Array(N), () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		result[i][j] = a[i][j] + b[i][j];
	}
}

for (let i = 0; i < N; i++) {
	console.log(result[i].join(' '));
}