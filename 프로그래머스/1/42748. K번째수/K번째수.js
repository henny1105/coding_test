function solution(array, commands) {
    let result = [];
    
    commands.forEach(([i, j, k]) => {
        let sort = array.slice(i-1,j).sort((a,b)=>a-b);
        result.push(sort[k-1]);
    })
    
    return result;
}