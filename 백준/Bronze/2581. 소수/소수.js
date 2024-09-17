const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input.map(Number);
let arr = [];

function isPrime(num) {
	if (num < 2) return false;

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}

	return true;
}

for (let i = M; i <= N; i++) {
	if (isPrime(i)) arr.push(i);
}

if (arr.length === 0) {
	console.log(-1);
} else {
	console.log(arr.reduce((acc, cur) => acc + cur));
	console.log(Math.min(...arr));
}