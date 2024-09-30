const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const num = Number(input[0]);
let result = '';

for(let i = 1; i <= num; i++) {
  console.log(`${i}. ${input[i]}`);
}
