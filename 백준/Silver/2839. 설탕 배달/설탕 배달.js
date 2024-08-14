const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input[0]);

function sugarDelivery(N) {
	let count = 0;

	while (N >= 0) {
		if (N % 5 === 0) {
			count += N / 5;
			console.log(count);
			return;
		}
		N -= 3;
		count += 1;
	}

	console.log(-1);
}

sugarDelivery(num);
