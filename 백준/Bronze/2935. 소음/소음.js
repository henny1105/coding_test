const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = BigInt(input[0]);
const operate = input[1].trim();
const B = BigInt(input[2]);

if (operate === '+') {
	console.log((A + B).toString());
} else if (operate === '*') {
	console.log((A * B).toString());
}
