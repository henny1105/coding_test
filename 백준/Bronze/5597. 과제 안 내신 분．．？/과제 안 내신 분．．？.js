const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const students = input.map(Number);
let allStudents = Array.from({ length: 30 }, (_, i) => i + 1);

let missingStudents = allStudents.filter((student) => !students.includes(student));

missingStudents.sort((a, b) => a - b);

console.log(missingStudents[0]);
console.log(missingStudents[1]);