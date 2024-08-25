const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [A, B] = input[0].split(' ').map(Number);

const minA = Number(A.toString().replace(/6/g, '5'));
const minB = Number(B.toString().replace(/6/g, '5'));
const minSum = minA + minB;

const maxA = Number(A.toString().replace(/5/g, '6'));
const maxB = Number(B.toString().replace(/5/g, '6'));
const maxSum = maxA + maxB;

console.log(minSum, maxSum);
