function solution(n) {
    let arr = [];
    
    for(let i = 0; i < n; i++) {
        const row = [];
        for(let j = 0; j < n; j++) {
            if(i === j) {
                row.push(1);
            }else {
                row.push(0);
            }
        }
        arr.push(row);
    }
    
    return arr;
}