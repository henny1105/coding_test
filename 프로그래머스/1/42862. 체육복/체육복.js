function solution(n, lost, reserve) {
    // 여벌 체육복을 가져온 학생이 체육복을 도난 당했을 수 있다. 체육복은 하나만 도난 당했다고 가정
    
    let lostArr = [];
    let reserveArr = [];
    
    for(let i = 0; i < lost.length; i++) {
        if(!reserve.includes(lost[i])){
            lostArr.push(lost[i]);
        }
    }
    
    for(let i = 0; i < reserve.length; i++) {
        if(!lost.includes(reserve[i])){
            reserveArr.push(reserve[i]);
        }
    }
    
    lostArr.sort((a,b)=>a-b);
    reserveArr.sort((a,b)=>a-b);
    
    // 체육복을 가지고 있는 학생수
    let result = n - lostArr.length;
    
    // 여벌 체육복을 빌려줄 수 있는 학생을 처리
    for (let i = 0; i < reserveArr.length; i++) {
        for (let j = 0; j < lostArr.length; j++) {
            if (reserveArr[i] === lostArr[j] - 1 || reserveArr[i] === lostArr[j] + 1) {
                // 체육복을 빌려주었으므로 결과에 반영
                result++;
                // 빌려준 학생을 lostArr에서 제거
                lostArr.splice(j, 1);
                break; // 한 번 빌려주면 그만, 다음 reserve 학생으로 넘어감
            }
        }
    }
    
    return result;
    
}