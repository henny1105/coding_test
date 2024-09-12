function solution(arr, intervals) {
    let result = [];
    
    for(let i = 0; i < intervals.length; i++) {
        const start = intervals[i][0];
        const end = intervals[i][1] + 1;
        
        result.push(arr.slice(start,end));
    }
    
    return result.flat();
}