const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let xArr = [];
let yArr = [];

for (let i = 0; i < input.length; i++) {
	let [x, y] = input[i].split(' ').map(Number);

	xArr.push(x);
	yArr.push(y);
}

function checkNumber(num) {
	if (num[0] === num[1]) {
		return num[2];
	} else if (num[1] === num[2]) {
		return num[0];
	} else {
		return num[1];
	}
}

console.log(checkNumber(xArr), checkNumber(yArr));