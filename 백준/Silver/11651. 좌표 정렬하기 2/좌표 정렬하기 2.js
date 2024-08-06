const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const points = [];
for (let i = 1; i <= n; i++) {
	const [x, y] = input[i].split(' ').map(Number);
	points.push([x, y]);
}

points.sort((a, b) => {
	if (a[1] === b[1]) {
		return a[0] - b[0];
	} else {
		return a[1] - b[1];
	}
});

points.forEach((point) => {
	console.log(point.join(' '));
});