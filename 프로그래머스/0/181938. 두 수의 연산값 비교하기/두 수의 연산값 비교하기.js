function solution(a, b) {
    const sum1 = Number(a.toString() + b.toString());
    const sum2 = Number(2 * a.toString() * b.toString());
    
    return sum1 >= sum2 ? sum1 : sum2;
}