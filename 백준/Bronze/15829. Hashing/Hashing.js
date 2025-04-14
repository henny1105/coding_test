const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = Number(input[0]);
let str = input[1];

const r = 31;
const M = 1234567891;

let hash = 0;
let power = 1;

for (let i = 0; i < num; i++) {
	const char = str[i].charCodeAt(0) - 96;
	hash = (hash + ((char * power) % M)) % M;
	power = (power * r) % M;
}

console.log(hash);
