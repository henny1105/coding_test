function solution(s) {
    let arr = s.split('');
    let sort = arr.sort();
    let reverse = sort.reverse();
    
    return reverse.join('');
}