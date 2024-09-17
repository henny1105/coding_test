const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map(Number);

let sum = 0;
let min = [];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 !== 0) {
		sum += arr[i];
		min.push(arr[i]);
	}
}

if (min.length === 0) {
	console.log(-1);
} else {
	console.log(sum);
	console.log(Math.min(...min));
}