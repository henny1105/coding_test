function solution(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    let answer = arr.at(-1) * arr.at(-2);
    
    return answer;
}