const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const n = input.length - 1;
let result = 0;

for (let i = 0; i < n; i++) {
	result += input[i];
}

console.log(result);