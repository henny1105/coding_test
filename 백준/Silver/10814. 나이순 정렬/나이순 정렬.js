const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
const arr = [];

for (let i = 1; i <= num; i++) {
	arr.push(input[i].split(' '));
}

arr.sort((a, b) => {
	if (a[0] != b[0]) {
		return a[0] - b[0];
	} else {
		return a[1] - b[1];
	}
});

arr.forEach((el) => {
	console.log(el.join(' '));
});