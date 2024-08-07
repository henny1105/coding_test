function solution(my_string) {
    let numbers = [];
    
    for (let char of my_string) {
        if (!isNaN(char) && char !== ' ') {
            numbers.push(Number(char));
        }
    }
    
    numbers.sort((a,b) => a-b);
    
    return numbers;
}