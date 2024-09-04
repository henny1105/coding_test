function solution(age) {
	let arr = {};

	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for(let i = 0; i < 10; i++) {
        arr[i] = alphabet[i]
    }
    
    let result = '';
    let ageStr = age.toString();
    
    
    for(let j = 0; j < ageStr.length; j++) {
        result += arr[ageStr[j]]
    }
    
    return result;
}