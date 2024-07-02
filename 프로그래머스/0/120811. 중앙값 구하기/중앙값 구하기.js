function solution(array) {
    const mid = Math.ceil(array.length / 2) - 1;
    const arr = array.sort((a,b) => a-b);
    
    return arr[mid];
}