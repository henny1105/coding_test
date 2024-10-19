const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
let files = input.slice(1);

let result = '';

for (let i = 0; i < files[0].length; i++) {
	let temp = files[0][i];
	let flag = true;
	for (let j = 1; j < N; j++) {
		if (temp !== files[j][i]) {
			flag = false;
			break;
		}
	}
	if (flag) {
		result += temp;
	} else {
		result += '?';
	}
}

console.log(result);
