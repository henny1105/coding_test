const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);
let times = [];

for (let i = 1; i <= num; i++) {
	let [startTime, endTime] = input[i].split(' ').map(Number);
	times.push([startTime, endTime]);
}

times.sort((a, b) => {
	if (a[1] === b[1]) {
		return a[0] - b[0]; 
	} else {
		return a[1] - b[1]; 
	}
});

let count = 0;
let lastEndTime = 0;

for (let i = 0; i < num; i++) {
	let [startTime, endTime] = times[i];

	if (startTime >= lastEndTime) {
		count++;
		lastEndTime = endTime;
	}
}

console.log(count);
