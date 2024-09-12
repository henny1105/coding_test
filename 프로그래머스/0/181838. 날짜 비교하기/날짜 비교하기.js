function solution(date1, date2) {
    let dateArr1 = date1.join('');
    let dateArr2 = date2.join('');
    
    if(Number(dateArr1) - Number(dateArr2) < 0) {
        return 1;
    }else {
        return 0;
    }
}