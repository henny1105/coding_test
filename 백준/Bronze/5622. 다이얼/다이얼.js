const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const dial = {
	2: ['A', 'B', 'C'],
	3: ['D', 'E', 'F'],
	4: ['G', 'H', 'I'],
	5: ['J', 'K', 'L'],
	6: ['M', 'N', 'O'],
	7: ['P', 'Q', 'R', 'S'],
	8: ['T', 'U', 'V'],
	9: ['W', 'X', 'Y', 'Z'],
};

let time = 0;

for (let char of input) {
	for (let key in dial) {
		if (dial[key].includes(char)) {
			time += parseInt(key) + 1;
			break;
		}
	}
}

console.log(time);
