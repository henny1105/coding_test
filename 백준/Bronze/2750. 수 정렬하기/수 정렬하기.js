const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

input.shift();
let arr = input.sort((a, b) => a - b);
console.log(arr.join('\n'));