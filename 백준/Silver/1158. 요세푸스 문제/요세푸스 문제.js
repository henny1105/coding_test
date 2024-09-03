const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [N, K] = input.map(Number);
let arr = [];

for (let i = 1; i <= N; i++) {
	arr.push(i);
}

let result = [];
let index = 0;

while (arr.length > 0) {
	index = (index + K - 1) % arr.length;
	result.push(arr.splice(index, 1)[0]);
}

console.log('<' + result.join(', ') + '>');