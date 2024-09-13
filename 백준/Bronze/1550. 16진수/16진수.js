const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const decimalValue = parseInt(input, 16);
console.log(decimalValue);
