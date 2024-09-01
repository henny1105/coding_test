const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let hamburger = input.slice(0, 3).map(Number);
let drink = input.slice(3).map(Number);

console.log(Math.min(...hamburger) + Math.min(...drink) - 50);