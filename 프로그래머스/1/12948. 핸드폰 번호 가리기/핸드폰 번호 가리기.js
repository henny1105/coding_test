function solution(phone_number) {
    let num = phone_number.length;
    let last = phone_number.slice(-4);
    let star = '';
        
    for(let i = 0; i < num - 4; i++) {
        star += '*';
    }
    
    return star.concat(last)
}