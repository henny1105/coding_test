function solution(a, b) {
    const sum = Number(a.toString() + b.toString());
    const sumReverse = Number(b.toString() + a.toString());
    
    return sum > sumReverse ? sum : sumReverse;
}