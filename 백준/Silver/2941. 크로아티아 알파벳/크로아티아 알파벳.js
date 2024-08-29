const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
const string = input[0];

let count = 0;

for (let i = 0; i < string.length; i++) {
	if (arr.includes(string.slice(i, i + 2))) {
		i++;
	} else if (arr.includes(string.slice(i, i + 3))) {
		i += 2;
	}
	count++;
}

console.log(count);
