const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input[0]);
let result = '';

for (let i = 1; i <= num; i++) {
	result += ' '.repeat(num - i) + '*'.repeat(2 * i - 1) + '\n';
}

console.log(result);