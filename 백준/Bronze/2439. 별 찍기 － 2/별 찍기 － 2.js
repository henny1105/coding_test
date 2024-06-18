const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const num = parseInt(input[0]);
let result = '';

for (let i = 1; i <= num; i++) {
	result += ' '.repeat(num - i) + '*'.repeat(i) + '\n';
}

console.log(result);
