const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let h = Number(input[0]);
let m = Number(input[1]);

const arr = [h, m - 45];

if (arr[1] < 0) {
	arr[0] -= 1;
	arr[1] = 60 + arr[1];
}

if (arr[0] < 0) {
	arr[0] = 23;
}

console.log(arr.join(' '));