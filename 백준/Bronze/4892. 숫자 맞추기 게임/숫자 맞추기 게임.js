const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const arr = input.slice(0, input.length - 1);

for (let i = 0; i < arr.length; i++) {
	let n1 = arr[i] * 3;
	let n2;

	if (n1 % 2 === 0) {
		n2 = n1 / 2;
	} else {
		n2 = (n1 + 1) / 2;
	}

	let n3 = Math.floor(n2 * 3);
	let n4 = Math.floor(n3 / 9);

	if (n1 % 2 === 0) {
		console.log(`${i + 1}. even ${n4}`);
	} else {
		console.log(`${i + 1}. odd ${n4}`);
	}
}
