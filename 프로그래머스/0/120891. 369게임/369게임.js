function solution(order) {
    const gameNum = [3, 6, 9];
    const arr = order.toString().split('').map(Number);
    let result = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(gameNum.includes(arr[i])) {
            result++;
        }
    }
    
    return result;
}