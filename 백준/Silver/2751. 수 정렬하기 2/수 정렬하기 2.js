const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let arr = input.slice(1);
arr.sort((a, b) => a - b);

console.log(arr.join('\n'));