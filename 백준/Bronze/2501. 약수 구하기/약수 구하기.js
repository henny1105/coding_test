const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const arr = input.map(Number);
let result = [];

for (let i = 1; i <= arr[0]; i++) {
	if (arr[0] % i === 0) {
		result.push(i);
	}
}

console.log(result[arr[1] - 1] || 0);