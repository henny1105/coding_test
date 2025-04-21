const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const [A, B, V] = input;
const result = Math.ceil((V - B) / (A - B));
console.log(result);