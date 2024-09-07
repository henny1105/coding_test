const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [hour, minute, second] = input[0].split(' ').map(Number);
let time = Number(input[1]);

let newSecond = second + time;
let newMinute = Math.floor(newSecond / 60) + minute;
let newHour = Math.floor(newMinute / 60) + hour;

console.log(newHour % 24, newMinute % 60, newSecond % 60);