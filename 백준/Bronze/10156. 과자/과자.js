const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [k, n, m] = input[0].split(' ').map(Number);
let result = k * n - m;

console.log(result > 0 ? result : 0);
