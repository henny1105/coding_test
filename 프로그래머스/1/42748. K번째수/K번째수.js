function solution(array, commands) {
    let result = commands.map(([i, j, k]) => {
        let slice = array.slice(i-1, j);
        let sort = slice.sort((a,b)=>a-b);
        
        return sort[k-1];
    });
    
    return result;
}