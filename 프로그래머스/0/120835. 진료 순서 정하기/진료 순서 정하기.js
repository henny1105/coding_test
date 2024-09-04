function solution(emergency) {
    let sort = [...emergency].sort((a, b) => b - a);
    let result = [];
    
    for(let i = 0; i < emergency.length; i++) {
        for(let j = 0; j < sort.length; j++) {
            if(emergency[i] === sort[j]){
                result.push(j + 1);
                break;
            }
        }
    }
    return result;
}