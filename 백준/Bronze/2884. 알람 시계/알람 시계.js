const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

if (b < 45) {
	console.log(a === 0 ? 23 : a - 1, b + 15);
} else {
	console.log(a, b - 45);
}
