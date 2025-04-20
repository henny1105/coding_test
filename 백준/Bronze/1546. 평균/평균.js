const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.split(' ').map(Number));

let n = input[0];
let arr = input[1];
let max = Math.max(...arr);
let result = 0;

for (let i = 0; i < n; i++) {
	result += ((arr[i] / max) * 100) / n;
}

console.log(result);
