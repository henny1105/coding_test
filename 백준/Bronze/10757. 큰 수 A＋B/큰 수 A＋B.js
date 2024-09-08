const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const [a, b] = input.map(BigInt);
console.log((a + b).toString());