const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const nums = input.map(Number);
const remainders = new Set();

for (let i = 0; i < nums.length; i++) {
	let divide = nums[i] % 42;
	remainders.add(divide);
}
console.log(remainders.size);
