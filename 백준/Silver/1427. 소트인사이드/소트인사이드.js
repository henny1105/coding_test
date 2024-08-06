const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let num = input.split('').map(Number);
num.sort((a, b) => b - a);
const sortedNum = num.join('');
console.log(sortedNum);