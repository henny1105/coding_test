function solution(price, money, count) {
    let arr = [];
    
    for(let i = 1; i <= count; i++) {
        arr.push(price * i);
    }
    
    let sum = arr.reduce((cur, acc) => cur + acc, 0);
    
    const result = sum - money;
    
    if(result > 0) {
        return result;
    }else {
        return 0;
    }
}