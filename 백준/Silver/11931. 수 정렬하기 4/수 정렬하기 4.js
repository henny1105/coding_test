const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map(Number);
arr.shift();

arr.sort((a, b) => b - a);
console.log(arr.join('\n'));