function solution(numbers) {
    let result = -Infinity;  // 최대값을 저장할 변수 초기화
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if (i !== j) { 
                let arr = numbers[i] * numbers[j];
                if (arr > result) {
                    result = arr;
                }
            }
        }
    }
    
    return result;
}

