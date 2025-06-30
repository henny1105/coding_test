const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const n = Number(input[0]);
const arr = input.slice(1).map(Number);

let max = arr[0];
let current = arr[0];

for (let i = 1; i < n; i++) {
	current = Math.max(arr[i], current * arr[i]);
	max = Math.max(max, current);
}

console.log(max.toFixed(3));