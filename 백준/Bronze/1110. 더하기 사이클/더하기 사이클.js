const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let original = Number(input[0]);
let num = original;
let count = 0;

while (true) {
	count++;
	let sum = Math.floor(num / 10) + (num % 10);
	num = (num % 10) * 10 + (sum % 10);

	if (num === original) {
		break;
	}
}

console.log(count);