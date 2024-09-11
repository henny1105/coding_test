const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

for (let i = 1; i <= n; i++) {
	let arr = input[i].split(' ');
	let num = parseFloat(arr[0]);
	const operations = arr.slice(1);

	operations.forEach((el) => {
		if (el === '@') {
			num *= 3;
		} else if (el === '%') {
			num += 5;
		} else if (el === '#') {
			num -= 7;
		}
	});

	console.log(num.toFixed(2));
}