const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

if (1 <= a && a <= 6 && 1 <= b && b <= 6 && 1 <= c && c <= 6) {
	if (a === b && b === c) {
		console.log(10000 + a * 1000);
	} else if (a === b || a === c) {
		console.log(1000 + a * 100);
	} else if (b === c) {
		console.log(1000 + b * 100);
	} else {
		const max = Math.max(a, b, c);
		console.log(max * 100);
	}
}

