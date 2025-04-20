const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.split(' ').map(Number));

let [n, m] = input[0];

for (let i = 0; i < n; i++) {
	let result = [];
	for (let j = 0; j < m; j++) {
		const sum = input[i + 1][j] + input[i + 1 + n][j];
		result.push(sum);
	}
	console.log(result.join(' '));
}