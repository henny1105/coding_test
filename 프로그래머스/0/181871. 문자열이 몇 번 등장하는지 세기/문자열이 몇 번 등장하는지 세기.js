function solution(myString, pat) {
    let count = 0;
    const patLength = pat.length;
    const stringLength = myString.length;

    for (let i = 0; i <= stringLength - patLength; i++) {
        if (myString.substr(i, patLength) === pat) {
            count++;
        }
    }

    return count;
}
