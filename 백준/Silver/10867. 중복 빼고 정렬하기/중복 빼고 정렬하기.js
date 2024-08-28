const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input[0];
let arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr.join(' '));