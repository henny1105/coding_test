const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const basket = [];
for (let i = 1; i < N + 1; i++) {
	basket.push(i);
}

for (let idx = 1; idx <= M; idx++) {
	const [i, j] = input[idx].split(' ').map(Number);
	const temp = basket[i - 1];
	basket[i - 1] = basket[j - 1];
	basket[j - 1] = temp;
}

console.log(basket.join(' '));
