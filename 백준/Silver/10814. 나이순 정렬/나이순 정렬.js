const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let arr = [];

for (let i = 1; i <= num; i++) {
	let [age, name] = input[i].split(' ');
	arr.push([Number(age), name]);
}
arr.sort((a, b) => {
	if (a[0] !== b[0]) {
		return a[0] - b[0];
	} else {
		return 0;
	}
});

arr.forEach((el) => {
	console.log(el.join(' '));
});