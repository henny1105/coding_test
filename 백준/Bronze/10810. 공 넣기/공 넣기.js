const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const baskets = Array(N).fill(0);

for (let idx = 1; idx <= M; idx++) {
	const [i, j, k] = input[idx].split(' ').map(Number);
	for (let b = i - 1; b <= j - 1; b++) {
		baskets[b] = k;
	}
}

console.log(baskets.join(' '));