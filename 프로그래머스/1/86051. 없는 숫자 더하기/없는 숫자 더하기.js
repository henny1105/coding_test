function solution(numbers) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    let result = arr.reduce((acc,cur)=>acc+cur,0) - numbers.reduce((acc,cur)=>acc+cur,0);
    
    return result;
}