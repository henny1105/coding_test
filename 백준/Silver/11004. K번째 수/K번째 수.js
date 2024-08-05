const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const numArr = input.split('\n')[0].split(' ').map(Number);
const array = input.split('\n')[1].split(' ').map(Number);
const K = numArr[1];
const sort = array.sort((a, b) => a - b);
const result = sort[K - 1];

console.log(result);
