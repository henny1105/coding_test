const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
	let scores = input[i].split(' ').slice(1).map(Number);
	scores.sort((a, b) => a - b);

	let largestGap = 0;
	for (let j = 1; j < scores.length; j++) {
		largestGap = Math.max(largestGap, scores[j] - scores[j - 1]);
	}

	console.log(`Class ${i}`);
	console.log(`Max ${scores[scores.length - 1]}, Min ${scores[0]}, Largest gap ${largestGap}`);
}
