const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let [a, b, c] = input;
let sum = (a * b * c).toString();
let result = Array(10).fill(0);

for (let i = 0; i < sum.length; i++) {
	let numSum = Number(sum[i]);
	result[numSum]++;
}

result.forEach((el) => console.log(el));