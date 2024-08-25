const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let word = input[0].split('');
let result = [];

for (let i = 0; i < word.length; i++) {
	if (word[i] === word[i].toUpperCase()) {
		result.push(word[i].toLowerCase());
	} else {
		result.push(word[i].toUpperCase());
	}
}

console.log(result.join(''));