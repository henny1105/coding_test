const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

const isPrime = (num) => {
	if (num < 2) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
};

let primeCount = 0;
for (let i = 0; i < N; i++) {
	if (isPrime(numbers[i])) {
		primeCount++;
	}
}

console.log(primeCount);