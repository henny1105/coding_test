const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0].trim());

for (let i = 1; i <= n; i++) {
	const word = input[i].trim();
	const len = word.length;

	if (len >= 6 && len <= 9) {
		console.log('yes');
	} else {
		console.log('no');
	}
}