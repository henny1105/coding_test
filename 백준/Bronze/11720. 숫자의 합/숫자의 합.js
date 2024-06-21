const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = parseInt(input[0]);
const nums = input[1];
let sum = 0;
for (let i = 0; i < num; i++) {
	sum += parseInt(nums.charAt(i), 10);
}
console.log(sum);