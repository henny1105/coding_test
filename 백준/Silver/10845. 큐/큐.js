const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
let queue = [];
let result = [];

for (let i = 1; i <= num; i++) {
	let command = input[i].trim();

	if (command.includes('push')) {
		let value = Number(command.split(' ')[1]);
		queue.push(value);
	} else if (command === 'pop') {
		if (queue.length === 0) {
			result.push(-1);
		} else {
			result.push(queue.shift());
		}
	} else if (command === 'size') {
		result.push(queue.length);
	} else if (command === 'empty') {
		if (queue.length === 0) {
			result.push(1);
		} else {
			result.push(0);
		}
	} else if (command === 'front') {
		if (queue.length === 0) {
			result.push(-1);
		} else {
			result.push(queue[0]);
		}
	} else if (command === 'back') {
		if (queue.length === 0) {
			result.push(-1);
		} else {
			result.push(queue[queue.length - 1]);
		}
	}
}

console.log(result.join('\n'));