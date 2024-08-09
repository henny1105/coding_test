const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const uniqueArr = [...new Set(arr)];

uniqueArr.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < uniqueArr.length; i++) {
	myMap.set(uniqueArr[i], i);
}

let result = '';
for (x of arr) result += myMap.get(x) + ' ';
console.log(result);