const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const s = input[0];
const positions = Array(26).fill(-1);

for (let i = 0; i < s.length; i++) {
	const charCode = s.charCodeAt(i) - 97;
	if (positions[charCode] === -1) {
		positions[charCode] = i;
	}
}

console.log(positions.join(' '));