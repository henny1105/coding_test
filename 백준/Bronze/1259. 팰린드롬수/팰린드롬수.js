const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
	let number = input[i].trim();
	let reversedNumber = number.split('').reverse().join('');

	if (number === reversedNumber) {
		console.log('yes');
	} else {
		console.log('no');
	}
}
