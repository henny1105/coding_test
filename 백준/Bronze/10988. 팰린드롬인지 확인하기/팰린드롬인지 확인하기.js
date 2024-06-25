const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const s = input[0].trim().split('');
const sr = input[0].trim().split('').reverse();

console.log(s.join('') === sr.join('') ? 1 : 0);