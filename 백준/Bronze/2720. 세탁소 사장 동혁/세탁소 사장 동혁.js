const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = Number(input[0]);
let nums = [];

for (let i = 1; i <= n; i++) {
	nums.push(Number(input[i]));
}

let denominations = [25, 10, 5, 1];
let results = [];

for (let num of nums) {
	let result = [];
	for (let i = 0; i < denominations.length; i++) {
		let count = Math.floor(num / denominations[i]);
		result.push(count);
		num -= count * denominations[i];
	}
	results.push(result);
}

results.forEach((el) => {
	console.log(el.join(' '));
});
