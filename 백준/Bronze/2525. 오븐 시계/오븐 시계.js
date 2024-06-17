const input = require('fs').readFileSync(0).toString().trim().split("\n");
const [hour, minute] = input[0].split(' ').map(Number);
const minutesToAdd = Number(input[1]);

if (minute + minutesToAdd >= 60) {
	const newMinute = Math.floor((minute + minutesToAdd) / 60);
	const newHour = hour + newMinute;

	if (newHour >= 24) {
		console.log(newHour - 24, (minute + minutesToAdd) % 60);
	} else {
		console.log(newHour, (minute + minutesToAdd) % 60);
	}
} else {
	console.log(hour, minute + minutesToAdd);
}
