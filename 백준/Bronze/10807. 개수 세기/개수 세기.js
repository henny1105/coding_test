const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const v = Number(input[2]);

let count = 0;

for (let i = 0; i < N; i++) {
	if (numbers[i] === v) {
		count++;
	}
}

console.log(count);