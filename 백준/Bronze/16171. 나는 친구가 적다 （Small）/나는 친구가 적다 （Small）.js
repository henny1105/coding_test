const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input[0].replace(/[0-9]/g, '');
const target = input[1].trim();

if (str.includes(target)) {
	console.log(1);
} else {
	console.log(0);
}