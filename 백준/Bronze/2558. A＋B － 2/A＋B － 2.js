const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input.map(Number);
console.log(num.reduce((acc, cur) => acc + cur));