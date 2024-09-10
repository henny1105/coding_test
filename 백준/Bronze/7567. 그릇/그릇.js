const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let score = 10;

for (let i = 1; i < input.length; i++) {
	if (input[i] === input[i - 1]) {
		score += 5;
	} else {
		score += 10;
	}
}

console.log(score);
