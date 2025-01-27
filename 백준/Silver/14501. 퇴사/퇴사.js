const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.split(' '));

const N = parseInt(input[0]);
const T = [];
const P = [];

for (let i = 1; i <= N; i++) {
	T.push(parseInt(input[i][0]));
	P.push(parseInt(input[i][1]));
}

let dp = new Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
	if (i + T[i] <= N) {
		dp[i + T[i]] = Math.max(dp[i + T[i]], dp[i] + P[i]);
	}
	dp[i + 1] = Math.max(dp[i + 1], dp[i]);
}

console.log(dp[N]);