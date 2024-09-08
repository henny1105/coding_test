function solution(myString, pat) {
    let arr = myString.split('');
    let changeArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "A") {
            changeArr.push("B");
        }else {
            changeArr.push("A");
        }
    }
    
    let arrString = changeArr.join('');
    
    if(arrString.includes(pat)) {
        return 1;
    }else {
        return 0;
    }
}