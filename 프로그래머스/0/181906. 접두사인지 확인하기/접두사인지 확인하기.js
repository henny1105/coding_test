function solution(my_string, is_prefix) {
    let length = my_string.length;
    let arr = [];
    
    for(let i = 1; i <= length; i++) {
        arr.push(my_string.slice(0,i));
    }
    
    for(let j= 0;j< length; j++){
        if(arr[j] === is_prefix) {
            return 1;
        }
    }
    
    return 0;


}