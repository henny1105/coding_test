const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);
let result = '';

const min = Math.min(...numbers);
const max = Math.max(...numbers);

result += `${min} ${max}`;

console.log(result);