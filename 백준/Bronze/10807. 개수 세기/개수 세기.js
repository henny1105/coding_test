const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const searchNum = Number(input[2]);
let result = 0;

for (let i = 0; i <= num; i++) {
	if (arr[i] === searchNum) {
		result += 1;
	}
}
console.log(result);