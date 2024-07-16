const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const heights = input.map(Number);
const totalHeight = heights.reduce((sum, height) => sum + height, 0);

let found = false;
const result = [];

for (let i = 0; i < heights.length; i++) {
	for (let j = i + 1; j < heights.length; j++) {
		if (totalHeight - heights[i] - heights[j] === 100) {
			for (let k = 0; k < heights.length; k++) {
				if (k !== i && k !== j) {
					result.push(heights[k]);
				}
			}
			result.sort((a, b) => a - b);
			console.log(result.join('\n'));
			found = true;
			break;
		}
	}
	if (found) break;
}
