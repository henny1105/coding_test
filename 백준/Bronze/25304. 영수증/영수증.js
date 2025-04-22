const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((line) => line.split(' ').map(Number));

let [price] = input[0];
let [n] = input[1];
let result = 0;

for (let i = 2; i <= n + 1; i++) {
	let [totalPrice, count] = input[i];
	result += totalPrice * count;
}

price === result ? console.log('Yes') : console.log('No');