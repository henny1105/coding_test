function solution(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num >= 50 && num % 2 === 0) {
            result.push(num / 2);  
        } else if (num < 50 && num % 2 !== 0) {
            result.push(num * 2);
        } else {
            result.push(num);  
        }
    }
    
    return result;
}
