function solution(n) {
    n = n.toString().split('');
    let result = 0;
    
    for(let i = 0; i < n.length; i++) {
        let num = Number(n[i])
        result += num;
    }
    
    return result;
}