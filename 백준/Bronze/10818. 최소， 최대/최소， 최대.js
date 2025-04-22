const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let data = input[1].split(' ').map((x) => Number(x));

let min = data.reduce((a, b) => Math.min(a, b));
let max = data.reduce((a, b) => Math.max(a, b));

console.log(min, max);