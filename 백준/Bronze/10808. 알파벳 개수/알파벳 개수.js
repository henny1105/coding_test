const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const string = input[0].split('');
const alphabet = Array(26)
	.fill()
	.map((v, i) => String.fromCharCode(i + 97));

const newArr = new Array(alphabet.length).fill(0);

for (let i = 0; i < string.length; i++) {
	newArr[alphabet.indexOf(string[i])]++;
}

console.log(newArr.join(' '));
