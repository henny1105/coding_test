const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const total = Number(input[0]);
const num = Number(input[1]);
let totalPrice = 0;

for (let i = 2; i <= num + 1; i++) {
	const pair = input[i].split(' ').map(Number);
	const product = pair[0] * pair[1];

	totalPrice += product;
}

if (totalPrice === total) {
	console.log('Yes');
} else {
	console.log('No');
}
