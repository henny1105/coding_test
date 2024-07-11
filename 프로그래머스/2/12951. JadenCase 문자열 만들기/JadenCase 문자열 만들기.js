function solution(s) {
    let arr = s.toLowerCase().split(' ');
    let search = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    
    return search.join(' ')
}