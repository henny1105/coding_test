function solution(strings, n) {
    return strings.sort((a,b)=>{
        let arr = a[n].localeCompare(b[n]);
    
        if(arr === 0) {
            return a.localeCompare(b);
        }else {
            return arr;
        }
    })
}