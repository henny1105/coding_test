function solution(hp) {
    const val = [5, 3, 1];
    let result = 0;
    
    for(let i = 0; i < val.length; i++) {
        result += Math.trunc(hp / val[i])
        hp %= val[i]; 
    }
    
    return result;
}



