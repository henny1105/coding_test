const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split('/').map(Number);
const [K, D, A] = arr;

if (K + A < D || D === 0) {
	console.log('hasu');
} else {
	console.log('gosu');
}
