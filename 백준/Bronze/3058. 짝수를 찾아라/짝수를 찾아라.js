const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
	const arr = input[i].split(' ').map(Number);

	let sum = 0;
	let min = Infinity;

	for (let j = 0; j < arr.length; j++) {
		if (arr[j] % 2 === 0) {
			sum += arr[j];
			if (arr[j] < min) {
				min = arr[j];
			}
		}
	}

	console.log(`${sum} ${min}`);
}
