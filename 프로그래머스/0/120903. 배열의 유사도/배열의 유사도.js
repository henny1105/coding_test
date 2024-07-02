function solution(s1, s2) {
    const set2 = new Set(s2);
    let result = 0;

    for (let i = 0; i < s1.length; i++) {
        if (set2.has(s1[i])) {
            result++;
        }
    }

    return result;
}