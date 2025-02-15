function solution(arr1, arr2) {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    
    if(arr1Length > arr2Length) {
        return 1;
    }else if(arr1Length < arr2Length) {
        return -1;
    }else if(arr1Length === arr2Length) {
        let arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
        let arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);
        
        if(arr1Sum > arr2Sum) {
            return 1
        }else if(arr1Sum < arr2Sum) {
            return -1
        }else if(arr1Sum === arr2Sum) {
            return 0;
        }
    }
    
}