function solution(money) {
    let answer = [];
    const price = 5500;
    const americano = Math.trunc(money / price);
    const change = money - (price * americano);
    
    answer.push(americano,change);
    
    return answer;
}