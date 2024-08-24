const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.replace('\r', ''));

let arr = input.map((line) => Number(line));

let sum = arr.reduce((acc, current) => acc + current, 0);
let average = Math.floor(sum / arr.length);

arr.sort((a, b) => a - b);
let middle = arr[Math.floor(arr.length / 2)];

console.log(average);
console.log(middle);