const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);

if (num === 0) {
	console.log('YONSEI');
} else {
	console.log('Leading the Way to the Future');
}