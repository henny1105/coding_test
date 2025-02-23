function solution(arr) {
    let min = Math.min(...arr);
    let array = arr.filter(num => num !== min);
    
    return array.length === 0 ? [-1] : array;
}