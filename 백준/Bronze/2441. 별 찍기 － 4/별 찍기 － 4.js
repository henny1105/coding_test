const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input[0]);
let result = '';

for (let i = num; i > 0; i--) {
	result += ' '.repeat(num - i) + '*'.repeat(i) + '\n';
}

console.log(result);