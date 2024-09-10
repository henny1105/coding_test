const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
	const [r, e, c] = input[i].split(' ').map(Number);

	if (r === e - c) {
		console.log('does not matter');
	} else if (r < e - c) {
		console.log('advertise');
	} else if (r > e - c) {
		console.log('do not advertise');
	}
}