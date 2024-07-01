const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = input[0].split(' ').map(Number);

let ascending = [];
let descending = [];

for (let i = 1; i <= num.length; i++) {
	ascending.push(i);
}
for (let i = num.length; i >= 1; i--) {
	descending.push(i);
}

if (num.join('') === ascending.join('')) {
	console.log('ascending');
} else if (num.join(' ') === descending.join(' ')) {
	console.log('descending');
} else {
	console.log('mixed');
}
