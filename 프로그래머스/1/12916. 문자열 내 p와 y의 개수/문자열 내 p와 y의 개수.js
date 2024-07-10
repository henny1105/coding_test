function solution(s){
    let arr = s.toLowerCase().split('');
    let p_len = 0;
    let y_len = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "p") {
            p_len++;
        }else if(arr[i] === "y") {
            y_len++;
        }
    }
    
    return p_len === y_len ? true : false;
}