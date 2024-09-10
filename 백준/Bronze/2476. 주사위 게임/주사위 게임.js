const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
let arr = [];

for (let i = 1; i <= num; i++) {
	const [a, b, c] = input[i].split(' ').map(Number);

	if (a === b && b === c) {
		arr.push(10000 + a * 1000);
	} else if (a === b || a === c) {
		arr.push(1000 + a * 100);
	} else if (b === c) {
		arr.push(1000 + b * 100);
	} else {
		arr.push(Math.max(a, b, c) * 100);
	}
}

console.log(Math.max(...arr));