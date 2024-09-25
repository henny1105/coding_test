function solution(numbers, direction) {
    let result = [];
    
    if(direction === "right") {
        result = [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length-1)];
    }else if(direction === "left") {
        result = [...numbers.slice(1), numbers[0]]
    }
    
    return result;

}