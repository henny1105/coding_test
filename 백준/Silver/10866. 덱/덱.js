const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
let deque = [];
let result = [];

for (let i = 1; i <= num; i++) {
	let command = input[i].trim();

	if (command.includes('push_front')) {
		let num = Number(command.split(' ')[1]);
		deque.unshift(num);
	} else if (command.includes('push_back')) {
		let num = Number(command.split(' ')[1]);
		deque.push(num);
	} else if (command === 'pop_front') {
		if (deque.length === 0) {
			result.push(-1);
		} else {
			result.push(deque.shift());
		}
	} else if (command === 'pop_back') {
		if (deque.length === 0) {
			result.push(-1);
		} else {
			result.push(deque.pop());
		}
	} else if (command === 'size') {
		result.push(deque.length);
	} else if (command === 'empty') {
		if (deque.length === 0) {
			result.push(1);
		} else {
			result.push(0);
		}
	} else if (command === 'front') {
		if (deque.length === 0) {
			result.push(-1);
		} else {
			result.push(deque[0]);
		}
	} else if (command === 'back') {
		if (deque.length === 0) {
			result.push(-1);
		} else {
			result.push(deque[deque.length - 1]);
		}
	}
}

console.log(result.join('\n'));