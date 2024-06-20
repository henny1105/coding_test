const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const scores = input[1].split(' ').map(Number);
const maxScore = Math.max(...scores);
const newScores = scores.map((score) => (score / maxScore) * 100);
const sumNewScores = newScores.reduce((sum, score) => sum + score, 0);
const newAverage = sumNewScores / N;

console.log(newAverage.toFixed(2));