function solution(strArr) {
    let string = "ad";
    let result = [];
    
    for(let i = 0; i < strArr.length; i++) {
       if(!strArr[i].includes(string)) {
           result.push(strArr[i]);
       } 
    }
    
    return result;
}