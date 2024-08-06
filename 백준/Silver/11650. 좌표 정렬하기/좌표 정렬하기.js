const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const points = [];
for (let i = 1; i <= n; i++) {
	const [x, y] = input[i].split(' ').map(Number);
	points.push([x, y]);
}

points.sort((a, b) => {
	if (a[0] === b[0]) {
		return a[1] - b[1];
	} else {
		return a[0] - b[0];
	}
});

points.forEach((point) => {
	console.log(point.join(' '));
});
