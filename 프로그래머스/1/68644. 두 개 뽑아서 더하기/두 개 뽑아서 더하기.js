function solution(numbers) {
    let num = numbers.length;
    let result = [];
    
    for (let i = 0; i < num; i++) {
        for (let j = i + 1; j < num; j++) {
            result.push(numbers[i] + numbers[j]);
        }
    }
    
    result = [...new Set(result)];
    result.sort((a,b) => a-b);
    
    return result;
}