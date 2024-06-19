const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

let result = '';

for (let i = 0; i < N; i++) {
	if (numbers[i] < M) {
		result += numbers[i] + ' ';
	}
}

console.log(result);
