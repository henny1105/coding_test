const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const price = input[0];
const books = input.slice(1);
const sum = books.reduce((acc, cur) => acc + cur, 0);
console.log(price - sum);
