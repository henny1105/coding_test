const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let wSocre = [];
let kScore = [];

for (let i = 0; i < 10; i++) {
	wSocre.push(input[i]);
}

for (let i = 10; i < 20; i++) {
	kScore.push(input[i]);
}

wSocre.sort((a, b) => b - a);
kScore.sort((a, b) => b - a);

let wTop = wSocre.slice(0, 3);
let kTop = kScore.slice(0, 3);

let wSum = wTop.reduce((acc, cur) => acc + cur, 0);
let KSum = kTop.reduce((acc, cur) => acc + cur, 0);

console.log(wSum, KSum);