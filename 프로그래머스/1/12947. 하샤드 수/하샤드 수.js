function solution(x) {
    let arr = x.toString().split('').map(Number);
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    
    if(x % sum === 0) {
        return true;
    }else {
        return false;
    }
}