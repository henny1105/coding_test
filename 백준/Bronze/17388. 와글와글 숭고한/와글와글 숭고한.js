const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const [s, k, h] = input.map(Number);
const sum = s + k + h;

if (sum >= 100) {
	console.log('OK');
} else if (s < k && s < h) {
	console.log('Soongsil');
} else if (k < s && k < h) {
	console.log('Korea');
} else {
	console.log('Hanyang');
}