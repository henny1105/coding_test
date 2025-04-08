const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let num = Number(input[0]);
let result = 0;

for (let i = 1; i <= num; i++) {
	const sum = i + i.toString().split('').reduce((acc, cur) => acc + Number(cur), 0);

	if (sum === num) {
		result = i;
		break;
	}
}

console.log(result);