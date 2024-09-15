const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

console.log(year);

if (month < 10) {
	console.log('0' + month);
}

console.log(date);
