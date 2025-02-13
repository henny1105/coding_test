function solution(my_string) {
    let arr = my_string.toLowerCase().split('');
    
    arr.sort();
    
    return arr.join('');
}