const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let A = BigInt(input[0]);
let B = BigInt(input[1]);

let plus = A + B;
let minus = A - B;
let multiplied = A * B;

console.log(plus.toString());
console.log(minus.toString());
console.log(multiplied.toString());
