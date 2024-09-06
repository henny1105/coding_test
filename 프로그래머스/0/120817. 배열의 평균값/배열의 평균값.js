function solution(numbers) {
    let sum = numbers.reduce((acc, cur) => acc + cur);
    let numbersLength = numbers.length; 
    
    let result = sum / numbersLength;
    
    return result;
}