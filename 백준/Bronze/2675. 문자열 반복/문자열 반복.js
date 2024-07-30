const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = parseInt(input[0]);
const result = [];

for (let i = 1; i <= num; i++) {
	let [r, s] = input[i].split(' ');
	r = parseInt(r);
	let repeatedStr = '';

	for (let j = 0; j < s.length; j++) {
		repeatedStr += s[j].repeat(r);
	}

	result.push(repeatedStr);
}

console.log(result.join('\n'));