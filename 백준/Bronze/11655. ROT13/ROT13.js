const input = require('fs').readFileSync('/dev/stdin').toString();

const rot13 = {};
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const rot13Alphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

for (let i = 0; i < alphabet.length; i++) {
	rot13[alphabet[i]] = rot13Alphabet[i];
}

let result = '';

for (let i = 0; i < input.length; i++) {
	const char = input[i];

	if (rot13[char]) {
		result += rot13[char];
	} else {
		result += char;
	}
}

console.log(result);