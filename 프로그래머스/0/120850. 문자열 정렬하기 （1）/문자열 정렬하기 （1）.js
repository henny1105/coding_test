function solution(my_string) {
    let arr = my_string.replace(/[^0-9]/g, '');
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        result.push(Number(arr[i]));
    }
    
    return result.sort((a,b) => a-b);
}