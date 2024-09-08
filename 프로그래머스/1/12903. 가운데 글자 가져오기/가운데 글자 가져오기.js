function solution(s) {
    let len = s.length;
    let lenMid = Math.floor(len / 2); // 가운데 인덱스

    if (len % 2 !== 0) {
        // 홀수일 때 가운데 문자 반환
        return s[lenMid];
    } else {
        // 짝수일 때 가운데 두 문자 반환
        return s.slice(lenMid - 1, lenMid + 1);
    }
}
