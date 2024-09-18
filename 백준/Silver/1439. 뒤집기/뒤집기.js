const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let countZero = 0;
let countOne = 0;

if (input[0] === '0') {
	countZero += 1;
} else {
	countOne += 1;
}

for (let i = 1; i < input.length; i++) {
	if (input[i] !== input[i - 1]) {
		if (input[i] === '0') {
			countZero += 1;
		} else {
			countOne += 1;
		}
	}
}

console.log(Math.min(countZero, countOne));
