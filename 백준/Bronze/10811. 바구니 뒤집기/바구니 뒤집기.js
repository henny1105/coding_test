const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let baskets = Array.from({ length: N }, (_, i) => i + 1);

for (let k = 1; k <= M; k++) {
	let [i, j] = input[k].split(' ').map(Number);

	i -= 1;
	j -= 1;

	let reversedPart = baskets.slice(i, j + 1).reverse();
	baskets.splice(i, j - i + 1, ...reversedPart);
}

console.log(baskets.join(' '));
