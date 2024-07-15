const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const [a, b] = input.map(Number);

function gcd(x, y) {
	while (y !== 0) {
		const temp = y;
		y = x % y;
		x = temp;
	}
	return x;
}

function lcm(x, y) {
	return (x * y) / gcd(x, y);
}

const gcdResult = gcd(a, b);
const lcmResult = lcm(a, b);

console.log(gcdResult);
console.log(lcmResult);