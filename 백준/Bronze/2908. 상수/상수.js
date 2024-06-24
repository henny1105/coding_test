const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input[0].split(' ');

n = n.split('').reverse().join('');
m = m.split('').reverse().join('');

console.log(n > m ? n : m);