const input = require('fs').readFileSync('/dev/stdin').toString().replace(/\r/g, '').split('\n');

let scoreArr = {
	'A+': 4.5,
	'A0': 4.0,
	'B+': 3.5,
	'B0': 3.0,
	'C+': 2.5,
	'C0': 2.0,
	'D+': 1.5,
	'D0': 1.0,
	'F': 0.0,
};

let total = 0;
let count = 0;

for (let i = 0; i < 20; i++) {
	let [name, credit, grade] = input[i].split(' ');

	credit = Number(credit);

	if (grade !== 'P') {
		total += credit * scoreArr[grade];
		count += credit;
	}
}

const gpa = total / count;
console.log(gpa.toFixed(6));
