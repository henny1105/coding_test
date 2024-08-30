function solution(number) {
    let arr = number.split('').map(Number);
    let sum = arr.reduce((acc, current) => acc + current);
    let divide = sum % 9;
    
    return divide;
}