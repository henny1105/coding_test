function solution(x1, x2, x3, x4) {
    let arr1 = x1 || x2;
    let arr2 = x3 || x4;
    
    return arr1 && arr2;
}