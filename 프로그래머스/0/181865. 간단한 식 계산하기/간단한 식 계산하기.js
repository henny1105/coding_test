function solution(binomial) {
    let arr = binomial.split(' ');
    const num1 = Number(arr[0]);
    const num2 = Number(arr[2]);
    const operator = arr[1];
    
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    }
}