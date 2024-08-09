const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let arr = [];

for (let i = 1; i <= num; i++) {
	arr.push(input[i]);
}

let set = new Set(arr);
let uniqueArr = [...set];

uniqueArr.sort((a, b) => {
	if (a.length != b.length) {
		return a.length - b.length;
	} else {
		if (a < b) {
			return -1;
		} else if (a > b) {
			return 1;
		} else {
			return 0;
		}
	}
});

uniqueArr.forEach((el) => {
	console.log(el);
});