const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let s = input.split('');
let arr = [];

for (let i = 0; i < s.length; i++) {
	arr.push(s.slice(i).join(''));
}

console.log(arr.sort().join('\n'));