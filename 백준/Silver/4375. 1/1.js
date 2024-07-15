const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input.map(Number);

num.forEach((n) => {
	n = parseInt(n);
	let number = 1; // 초기값 1
	let length = 1; // 초기길이 1

	while (true) {
		if (number % n === 0) {
			console.log(length);

			break;
		}
		number = (number * 10 + 1) % n;
		length++;
	}
});