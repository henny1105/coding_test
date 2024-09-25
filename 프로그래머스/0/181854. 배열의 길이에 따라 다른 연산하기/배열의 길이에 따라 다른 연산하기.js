function solution(arr, n) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr.length % 2 !== 0) {
            if(i % 2 == 0) {
                result.push(arr[i] + n);
            }else {
                result.push(arr[i]);
            }
        }else {
            if(i % 2 !== 0) {
                result.push(arr[i] + n);
            }else {
                result.push(arr[i]);
            }
        }
    }
    
    return result;
    
}