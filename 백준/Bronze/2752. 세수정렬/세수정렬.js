const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let arr = input.map(Number).sort((a, b) => a - b);

console.log(arr.join(' '));