function solution(numbers) {
    numbers.sort((a,b) => {
        let ab = String(a) + String(b);
        let ba = String(b) + String(a);
        return ba.localeCompare(ab);
    });
    
    let result = numbers.join('');
    
    if(result[0] === '0') {
        return '0'
    }else {
        return result;
    }
}