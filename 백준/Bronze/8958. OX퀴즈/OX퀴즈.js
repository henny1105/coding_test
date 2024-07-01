const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
	const scores = input[i];
	let totalScore = 0;
	let currentStreak = 0;

	for (let k = 0; k < scores.length; k++) {
		if (scores[k] === 'O') {
			currentStreak += 1;
			totalScore += currentStreak;
		} else if (scores[k] === 'X') {
			currentStreak = 0;
		}
	}

	console.log(totalScore);
}