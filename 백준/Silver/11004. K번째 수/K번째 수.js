const input = require('fs').readFileSync(0).toString().trim().split("\n");
let [n, k] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);
console.log(arr[k - 1]);