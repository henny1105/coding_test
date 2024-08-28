const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

let sort = input.sort((a, b) => b - a);
let n = 2;

console.log(sort[n - 1]);