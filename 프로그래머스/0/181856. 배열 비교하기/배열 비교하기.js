function solution(arr1, arr2) {
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    
    let arr1Sum = arr1.reduce((acc, cur) => acc + cur);
    let arr2Sum = arr2.reduce((acc, cur) => acc + cur);
    
    if(arr1Len > arr2Len) {
        return 1;
    }else if(arr2Len > arr1Len) {
        return -1;
    }
    
    if(arr2Len === arr1Len) {
        if(arr1Sum > arr2Sum) {
            return 1;
        }else if(arr2Sum > arr1Sum) {
            return -1;
        }else {
            return 0;
        }
    }
}