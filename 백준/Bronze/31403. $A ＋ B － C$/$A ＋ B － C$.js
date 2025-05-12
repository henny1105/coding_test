const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let c = input[2];

console.log(a + b - c);
console.log(Number(String(a) + String(b) - c));