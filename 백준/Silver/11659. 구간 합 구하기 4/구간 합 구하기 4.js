const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.split(' ').map(Number));

let [N, M] = input[0];
let arr = input[1];

let prefixSum = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
	prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
}

let result = [];

for (let i = 0; i < M; i++) {
	let [start, end] = input[i + 2];
	result.push(prefixSum[end] - prefixSum[start - 1]);
}

console.log(result.join('\n'));