const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const count = parseInt(input[0]);
let result = '';

for (let i = 1; i <= count; i++) {
	let array = input[i].split(' ').map(Number);
	let sum = array[0] + array[1];

	result += `Case #${i}: ${sum}\n`;
}

console.log(result);