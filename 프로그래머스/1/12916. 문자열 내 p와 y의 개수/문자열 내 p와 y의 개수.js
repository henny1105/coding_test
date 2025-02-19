function solution(s){
    let arr = s.toLowerCase();
    let result = 0;
    let result2 = 0;
    
    for(let i = 0; i < arr.length; i++) {
       if(arr[i] === "p") {
           result ++;
       }else if(arr[i] === "y") {
           result2 ++;
       }
    }
    
    if(result === result2) {
        return true;
    }else if(result !== result2) {
        return false;
    }else {
        return true;
    }
}