const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let arr = input.map(Number);
console.log(input[1] * 2 - input[0]);
