function solution(ineq, eq, n, m) {
    let answer = '';
    
    if(eq === "!") {
        answer = n + ineq + m;
        return eval(answer) === true ? 1 : 0;  
    }else {
        answer = n + ineq + eq + m;
        return eval(answer) === true ? 1 : 0;    
    }
}