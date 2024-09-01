const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

input.forEach((element) => {
	console.log(element);
});
