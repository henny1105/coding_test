const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let [A, B] = input.split(' ').map(Number);

let count = 1;

while (B > A) {
	if (B % 2 === 0) {
		B = Math.floor(B / 2);
	} else if (B % 10 === 1) {
		B = Math.floor(B / 10);
	} else {
		break;
	}
	count++;
}

if (B === A) {
	console.log(count);
} else {
	console.log(-1);
}