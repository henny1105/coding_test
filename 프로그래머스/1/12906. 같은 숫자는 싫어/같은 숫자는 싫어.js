function solution(arr) {
    let result = [];
    let prev = null;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== prev) {
            result.push(arr[i]);
            prev = arr[i];
        }
    }
    
    return result;
}