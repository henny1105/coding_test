function solution(answers) {
    let a = [1, 2, 3, 4, 5];
    let b = [2, 1, 2, 3, 2, 4, 2, 5];
    let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let countA = 0;
    let countB = 0;
    let countC = 0;
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === a[i % a.length]) {
            countA++;
        }
        if(answers[i] === b[i % b.length]) {
            countB++;
        }
        if(answers[i] === c[i % c.length]) {
            countC++;
        }
    }
    

    let maxCount = Math.max(countA, countB, countC);
    let result = [];
    
    if (countA === maxCount) result.push(1);
    if (countB === maxCount) result.push(2);
    if (countC === maxCount) result.push(3);

    return result;
}