function solution(phone_number) {
    let star = '*'.repeat(phone_number.length - 4);
    let number = phone_number.slice(-4);
    
    return star + number;
}