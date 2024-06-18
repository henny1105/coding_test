const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = '';

for (let i = 0; i < input.length - 1; i++) {
	let array = input[i].split(' ').map(Number);
	let sum = array[0] + array[1];

	result += sum + '\n';
}

console.log(result);