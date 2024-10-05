const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const hongjunId = input;

console.log(`:fan::fan::fan:`);
console.log(`:fan::${hongjunId}::fan:`);
console.log(`:fan::fan::fan:`);