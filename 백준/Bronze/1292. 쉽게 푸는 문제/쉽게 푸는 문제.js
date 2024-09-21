const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const [A, B] = input.map(Number);
let arr = [];
let count = 0;
let sum = 0;

for (let i = 1; i <= B; i++) {
	for (let j = 1; j <= i; j++) {
		arr.push(i);
	}
}

for (let i = A - 1; i < B; i++) {
	sum += arr[i];
}

console.log(sum);
