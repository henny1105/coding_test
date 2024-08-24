const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.replace('\r', ''));

let arr = input.map(Number);
let result = arr.reduce((acc, current) => acc * current);

console.log(result);
