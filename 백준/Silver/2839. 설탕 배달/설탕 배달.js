const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let result = 0;

while (num >= 0) {
	if (num % 5 === 0) {
		result += num / 5;
		console.log(result);
		return;
	}
	num -= 3;
	result += 1;
}

if (num < 0) {
	console.log(-1);
}
