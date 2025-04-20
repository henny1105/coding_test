const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let total = input.reduce((a, b) => a + b, 0);

for (let i = 0; i < input.length; i++) {
	for (let j = i + 1; j < input.length; j++) {
		if (total - input[i] - input[j] === 100) {
			let result = input.filter((val, idx) => idx !== i && idx !== j);

			result.sort((a, b) => a - b);
			result.forEach((el) => console.log(el));

			process.exit();
		}
	}
}