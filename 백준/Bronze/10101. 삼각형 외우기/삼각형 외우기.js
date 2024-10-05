const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);


const [a, b, c] = input;
const sum = a + b + c;

if (sum !== 180) {
	console.log('Error');
} else if (a === b && b === c) {
	console.log('Equilateral');
} else if (a === b || b === c || a === c) {
	console.log('Isosceles');
} else {
	console.log('Scalene');
}