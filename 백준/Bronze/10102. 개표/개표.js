const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
const arr = input[1].split('');

let countA = 0;
let countB = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] === 'A') {
		countA++;
	} else if (arr[i] === 'B') {
		countB++;
	}
}

if (countA > countB) {
	console.log('A');
} else if (countA < countB) {
	console.log('B');
} else if (countA === countB) {
	console.log('Tie');
}
