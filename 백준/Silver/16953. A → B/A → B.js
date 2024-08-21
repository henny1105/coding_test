const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [A, B] = input[0].split(' ').map(Number);

function minOperations(A, B) {
	let count = 1;

	while (B !== A) {
		if (B < A) {
			return -1;
		}

		if (B % 2 === 0) {
			B /= 2;
		} else if (B % 10 === 1) {
			B = Math.floor(B / 10);
		} else {
			return -1;
		}

		count++;
	}

	return count;
}

console.log(minOperations(A, B));