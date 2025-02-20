function solution(n){
    let num = n.toString().split('').map(Number);
    
    let result = num.reduce((cur, num) => cur + num, 0);
    
    return result;
    
}