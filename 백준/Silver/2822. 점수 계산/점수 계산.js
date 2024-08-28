const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let scoresIndex = input.map((score, index) => ({
	score: score,
	index: index + 1,
}));

scoresIndex.sort((a, b) => b.score - a.score);

let top = scoresIndex.slice(0, 5);
let sum = top.reduce((acc, cur) => acc + cur.score, 0);

top.sort((a, b) => a.index - b.index);

console.log(sum);
console.log(top.map((el) => el.index).join(' '));