function solution(s) {
    const en = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };
    
    let result = s;
    const keys = Object.keys(en);
    
    for(let i = 0; i < keys.length; i++) {
        const word = keys[i];
        
        if(result.includes(word)) {
            result = result.split(word).join(en[word]); 
        }
    }
    
    return Number(result);
}