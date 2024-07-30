const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
	let data = input[i].split(' ').map(Number);
	let caseNum = data[0];
	let summary = 0;

	for (let j = 1; j <= caseNum; j++) {
		summary += data[j];
	}

	let average = summary / caseNum;
	let cnt = 0;

	for (let j = 1; j <= caseNum; j++) {
		if (data[j] > average) {
			cnt += 1;
		}
	}

	console.log(`${((cnt / caseNum) * 100).toFixed(3)}%`);
}
