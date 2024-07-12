function solution(myString, pat) {
    let arr1 = myString.toLowerCase();
    let arr2 = pat.toLowerCase();
    
    return arr1.includes(arr2) ? 1 : 0;
}