function solution(my_string, indices) {
    let result = [...my_string];
    
    for(let i = 0; i < indices.length; i++) {
        result[indices[i]] = '';
    }
    
    return result.join('');
}