const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let arr = input.map(Number);
let sort = arr.sort((a, b) => a - b);

console.log(sort.join(' '));