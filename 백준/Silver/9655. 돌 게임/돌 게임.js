const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = Number(input);

if (num % 2 !== 0) {
	console.log('SK');
} else {
	console.log('CY');
}