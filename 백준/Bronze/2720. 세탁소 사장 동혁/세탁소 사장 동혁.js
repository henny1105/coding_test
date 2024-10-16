const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const change = [25, 10, 5, 1];
const num = Number(input[0]);
let result = [];

for (let i = 1; i <= num; i++) {
	let money = input[i];
	let changeArr = [];
	for (let j = 0; j < change.length; j++) {
		changeArr.push(Math.floor(money / change[j]));
		money %= change[j];
	}
	result.push(changeArr);
}

for (let i = 0; i < num; i++) {
	console.log(result[i].join(' '));
}