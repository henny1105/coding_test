const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [A, I] = input.map(Number);

const result = A * (I - 1) + 1;

console.log(result);