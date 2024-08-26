const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arrN = input[1]
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);
const M = Number(input[2]);
const arrM = input[3].split(' ').map(Number);

let results = [];

for (let i = 0; i < M; i++) {
	let target = arrM[i];
	let start = 0;
	let end = N - 1;
	let found = false;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (arrN[mid] === target) {
			found = true;
			break;
		} else if (arrN[mid] < target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	if (found) {
		results.push(1);
	} else {
		results.push(0);
	}
}

console.log(results.join('\n'));