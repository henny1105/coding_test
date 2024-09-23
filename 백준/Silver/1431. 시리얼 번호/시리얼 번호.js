const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = parseInt(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
	arr.push(input[i]);
}

arr.sort((a, b) => {
	if (a.length === b.length) {
		let sumA = 0;
		let sumB = 0;
		for (let i = 0; i < a.length; i++) {
			if (!isNaN(a[i])) {
				sumA += parseInt(a[i]);
			}
			if (!isNaN(b[i])) {
				sumB += parseInt(b[i]);
			}
		}
		if (sumA === sumB) {
			return a.localeCompare(b);
		}
		return sumA - sumB;
	}
	return a.length - b.length;
});

console.log(arr.join('\n'));