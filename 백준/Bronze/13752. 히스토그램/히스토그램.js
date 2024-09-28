const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const num = input[0];
let result = '';

for (let i = 1; i <= num; i++) {
	result += '='.repeat(input[i]) + '\n';
}

console.log(result);