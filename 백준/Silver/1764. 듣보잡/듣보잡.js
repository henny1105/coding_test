const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const hear = new Set();
const see = new Set();
const result = [];

for (let i = 1; i <= n; i++) {
	hear.add(input[i]);
}

for (let i = n + 1; i < input.length; i++) {
	see.add(input[i]);
}

for (let name of hear) {
	if (see.has(name)) {
		result.push(name);
	}
}

console.log(result.length);
console.log(result.sort().join('\n'));