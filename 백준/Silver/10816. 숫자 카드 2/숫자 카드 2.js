const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const arrN = input[1]
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);
const M = Number(input[2]);
const arrM = input[3].split(' ').map(Number);

let results = [];

function lowerBound(arr, target) {
	let start = 0;
	let end = arr.length;

	while (start < end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] >= target) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return start;
}

function upperBound(arr, target) {
	let start = 0;
	let end = arr.length;

	while (start < end) {
		let mid = Math.floor((start + end) / 2);
		if (arr[mid] > target) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return start;
}

for (let i = 0; i < M; i++) {
	let target = arrM[i];
	let lowerIdx = lowerBound(arrN, target);
	let upperIdx = upperBound(arrN, target);
	results.push(upperIdx - lowerIdx);
}

console.log(results.join(' '));