function solution(arr) {
    let result = arr.reduce((cur,num) => cur+num, 0);
    
    return result/arr.length;
}