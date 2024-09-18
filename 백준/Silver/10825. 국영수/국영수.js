const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

let students = [];

for (let i = 1; i <= N; i++) {
	const [name, kor, eng, math] = input[i].split(' ');
	students.push({
		name: name,
		kor: parseInt(kor),
		eng: parseInt(eng),
		math: parseInt(math),
	});
}

students.sort((a, b) => {
	if (b.kor !== a.kor) {
		return b.kor - a.kor;
	}
	if (a.eng !== b.eng) {
		return a.eng - b.eng;
	}
	if (b.math !== a.math) {
		return b.math - a.math;
	}
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
});

const result = students.map((student) => student.name).join('\n');
console.log(result);