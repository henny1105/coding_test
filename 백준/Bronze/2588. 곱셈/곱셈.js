const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

const digit1 = num2 % 10;
const digit2 = Math.floor(num2 / 10) % 10;
const digit3 = Math.floor(num2 / 100) % 10;

const result1 = num1 * digit1;
const result2 = num1 * digit2;
const result3 = num1 * digit3;
const result4 = num1 * num2;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);