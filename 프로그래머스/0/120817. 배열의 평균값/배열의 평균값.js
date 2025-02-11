function solution(numbers) {
    let num = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        num += numbers[i];
    }
    
    return num / numbers.length;
}