const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
	arr.push(input[i]);
}

arr = [...new Set(arr)];

arr.sort((a, b) => {
	if (a.length === b.length) {
		return a.localeCompare(b);
	} else {
		return a.length - b.length;
	}
});

arr.forEach((item) => {
	console.log(item);
});