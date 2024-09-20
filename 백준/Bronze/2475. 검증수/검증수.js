const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let arr = input.map(Number);
arr = arr.map((item) => item ** 2);
let sum = arr.reduce((acc, cur) => acc + cur);
console.log(sum % 10);