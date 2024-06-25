const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const s = input[0].trim().toUpperCase().split('');
const set = [...new Set(s)];
let result = [];

for (let i = 0; i < set.length; i++) {
	let count = 0;

	for (let j = 0; j < s.length; j++) {
		if (set[i] === s[j]) {
			count++;
		}
	}

	result.push(count);
}

let maxCount = Math.max(...result);

let maxCountCheck = 0;

for (let i = 0; i < result.length; i++) {
	if (result[i] === maxCount) {
		maxCountCheck++;
	}
}

if (maxCountCheck > 1) {
	console.log('?');
} else {
	const index = result.indexOf(maxCount);
	console.log(set[index]);
}