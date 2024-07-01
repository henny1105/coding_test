const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = input.length;
let result = 1;

for (let i = 0; i < num; i++) {
	result *= input[i];
}

const resultString = result.toString();
let count = Array(10).fill(0);

for (let j = 0; j < resultString.length; j++) {
	const digit = resultString[j];
	count[Number(digit)] += 1;
}

for (let i = 0; i < count.length; i++) {
	console.log(count[i]);
}
