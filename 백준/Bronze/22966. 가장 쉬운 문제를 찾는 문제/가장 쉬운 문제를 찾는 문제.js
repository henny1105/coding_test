const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);

let arr = [];

for (let i = 1; i <= num; i++) {
	let [a, b] = input[i].split(' ');
	b = Number(b);

	arr.push([a, b]);
}

const sort = arr.sort((a, b) => a[1] - b[1]);

console.log(sort[0][0]);