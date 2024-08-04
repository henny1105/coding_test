function solution(num_list, n) {
    let count = [];
    for (let i = 0; i <= n-1; i++) {
        count.push(i);
    }
    
    let result = [];
    
    for(let k = 0; k <= count.length-1; k++) {
        result.push(num_list[count[k]]);
    }
    
   return result;
}
