const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = input.map(Number);
let result = [];

for (let i = 0; i < num.length; i++) {
	result.push(num[i] % 42);
}

result = [...new Set(result)].length;

console.log(result);
