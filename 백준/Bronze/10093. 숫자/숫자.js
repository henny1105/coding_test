const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [A, B] = input.map(Number);
let arr = [];

const start = Math.min(A, B) + 1;
const end = Math.max(A, B);

for (let i = start; i < end; i++) {
	arr.push(i);
}

console.log(arr.length);
console.log(arr.join(' '));