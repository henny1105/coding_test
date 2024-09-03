const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
	const t = input[i].trim().split(' ');

	for (let k = 0; k < t.length; k++) {
		t[k] = t[k].split('').reverse().join('');
	}

	console.log(t.join(' '));
}