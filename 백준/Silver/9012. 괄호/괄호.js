const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().split(/\r?\n/);

const n = parseInt(input[0]);
let result = '';

for (let i = 1; i <= n; i++) {
	const stack = [];
	const arr = input[i].split('');

	for (let j = 0; j < arr.length; j++) {
		if (arr[j] === '(') {
			stack.push(arr[j]);
		} else {
			if (stack.length === 0) {
				stack.push(arr[j]);
				break;
			} else {
				stack.pop();
			}
		}
	}

	if (stack.length === 0) {
		result += 'YES\n';
	} else {
		result += 'NO\n';
	}
}

console.log(result);