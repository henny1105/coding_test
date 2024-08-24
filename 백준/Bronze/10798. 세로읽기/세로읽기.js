const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.replace('\r', ''));

let result = '';
let maxLength = Math.max(...input.map((str) => str.length));

for (let i = 0; i < maxLength; i++) {
	for (let j = 0; j < input.length; j++) {
		if (i < input[j].length) {
			result += input[j][i];
		}
	}
}

console.log(result);