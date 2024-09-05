function solution(letter) {
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    let letterArr = letter.split(' ');
    let result = '';
    
    for(let i = 0; i < letterArr.length; i++) {
        const char = letterArr[i];
        
        if(morse[char]) {
            result += morse[char];
        }else {
            result += char;
        }
    }
    
    return result;
}