function solution(array) {
    const arr = array.sort((a,b) => a-b);
    const mid = Math.floor(arr.length / 2);
    
    return array[mid];
}