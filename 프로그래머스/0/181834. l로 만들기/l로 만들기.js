function solution(myString) {
    const alphabet = 'abcdefghijk'.split('');
    const myStringArr = myString.split('');
    
    let arr = [];
    
    for(let i = 0; i < myStringArr.length; i++) {
        if (alphabet.includes(myStringArr[i])) { 
            arr.push("l");
        }else {
            arr.push(myStringArr[i])
        }
    }
    
    return arr.join('');
}
