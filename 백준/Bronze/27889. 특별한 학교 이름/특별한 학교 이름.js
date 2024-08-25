const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let word = input[0];

if (word === 'NLCS') {
	console.log('North London Collegiate School');
} else if (word === 'BHA') {
	console.log('Branksome Hall Asia');
} else if (word === 'KIS') {
	console.log('Korea International School');
} else if (word === 'SJA') {
	console.log('St. Johnsbury Academy');
}