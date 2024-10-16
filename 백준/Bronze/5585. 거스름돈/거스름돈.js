const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const coin = Number(input[0]);
const coinList = [500, 100, 50, 10, 5, 1];
let change = 1000 - coin;

let count = 0;
for (let i = 0; i < coinList.length; i++) {
	count += Math.floor(change / coinList[i]);
	change %= coinList[i];
}

console.log(count);