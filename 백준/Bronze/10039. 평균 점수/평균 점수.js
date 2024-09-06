const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.map(Number);

for (let i = 0; i < arr.length; i++) {
	if (arr[i] <= 40) {
		arr[i] = 40;
	}
}

let average = arr.reduce((acc, cur) => acc + cur) / arr.length;
console.log(average);
