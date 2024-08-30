const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const num = Number(input[0]);
let count = [];

for (let i = 1; i <= num; i++) {
	count.push(i);
}

let multiple = count.reduce((acc, cur) => acc * cur, 1);
console.log(multiple);