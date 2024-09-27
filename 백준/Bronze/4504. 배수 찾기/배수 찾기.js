const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const num = input[0];
let i = 1;

while (input[i] !== 0) {
	if (input[i] % num === 0) {
		console.log(`${input[i]} is a multiple of ${num}.`);
	} else {
		console.log(`${input[i]} is NOT a multiple of ${num}.`);
	}
	i++;
}
