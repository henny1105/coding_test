const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let arr = [];

for (let i = 1; i <= num; i++) {
	arr.push(input[i].split(',').map(Number));
}

let sumArr = arr.map((pair) => pair.reduce((acc, cur) => acc + cur, 0));

console.log(sumArr.join('\n'));