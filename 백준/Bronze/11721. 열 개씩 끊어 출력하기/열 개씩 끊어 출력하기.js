const input = require('fs').readFileSync('/dev/stdin').toString().replace(/\r/g, '').split('\n');

let string = input.join('');
let num = 10;

let result = [];

for (let i = 0; i < string.length; i += num) {
	result.push(string.slice(i, i + num));
}

console.log(result.join('\n'));
