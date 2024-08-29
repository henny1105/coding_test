const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.replace('\r', ''));

let word = input[0];
let wordReverse = word.split('').reverse().join('');

if (word === wordReverse) {
	console.log(1);
} else {
	console.log(0);
}