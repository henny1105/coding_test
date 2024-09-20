const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const card = input[1].split(' ').map(Number);

let result = 0;

for (let i = 0; i < N - 2; i++) {
	for (let j = i + 1; j < N - 1; j++) {
		for (let k = j + 1; k < N; k++) {
			let sum = card[i] + card[j] + card[k];
			if (sum <= M) {
				result = Math.max(result, sum);
			}
		}
	}
}

console.log(result);
