const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const num = Number(input[0]);
let arr = [];

for (let i = 1; i <= num; i++) {
	if (input[i] === 0) {
		arr.pop();
	} else {
		arr.push(input[i]);
	}
}

const result = arr.reduce((acc, cur) => acc + cur, 0);
console.log(result);