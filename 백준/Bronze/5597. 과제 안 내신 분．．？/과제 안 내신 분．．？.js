const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input.map(Number);
const array = [];

for (let i = 1; i <= 30; i++) {
	array.push(i);
}

console.log(array.filter((x) => !numbers.includes(x)).join(' '));