function solution(arr) {
    let result = arr.reduce((acc, item) => acc + item, 0);
    
    return result / arr.length;
}