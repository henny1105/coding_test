const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const arr = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
const inputArr = input[0].split('');

for (let i = 0; i < inputArr.length; i++) {
	if (arr.includes(inputArr[i])) {
		count++;
	}
}

console.log(count);