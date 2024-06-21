const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input.map(Number);
const max = Math.max(...numbers);
const maxIndex = numbers.indexOf(max) + 1;
let result = '';

result += max + '\n' + maxIndex;
console.log(result);