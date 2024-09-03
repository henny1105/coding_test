const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);

let stack = [];
let result = [];

for (let i = 1; i <= num; i++) {
	let command = input[i].trim();

	if (command.includes('push')) {
		let value = Number(command.split(' ')[1]);
		stack.push(value);
	} else if (command === 'pop') {
		if (stack.length === 0) {
			result.push(-1);
		} else {
			result.push(stack.pop());
		}
	} else if (command === 'size') {
		result.push(stack.length);
	} else if (command === 'empty') {
		if (stack.length === 0) {
			result.push(1);
		} else {
			result.push(0);
		}
	} else if (command === 'top') {
		if (stack.length === 0) {
			result.push(-1);
		} else {
			result.push(stack[stack.length - 1]);
		}
	}
}

console.log(result.join('\n'));
