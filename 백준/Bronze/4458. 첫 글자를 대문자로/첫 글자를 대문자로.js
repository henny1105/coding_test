const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(input[0]);
let result = [];

for (let i = 1; i <= num; i++) {
	result.push(input[i][0].toUpperCase() + input[i].slice(1));
}

console.log(result.join('\n'));