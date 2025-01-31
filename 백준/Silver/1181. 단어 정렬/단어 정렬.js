const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
	arr.push(input[i]);
}

arr = [...new Set(arr)];

arr.sort((a, b) => {
	if (a.length === b.length) {
		return a.localeCompare(b);
	}
	return a.length - b.length;
});

console.log(arr.join('\n'));