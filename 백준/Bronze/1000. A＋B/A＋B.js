const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const result = input.reduce((acc, cur) => acc + cur);
console.log(result);