function solution(num_list) {
    let odd = [];
    let even = [];

    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0) {
            odd.push(num_list[i])
        }else {
            even.push(num_list[i])
        }
    }
    
    let oddSum = odd.reduce((acc, cur) => acc + cur);
    let evenSum = even.reduce((acc, cur) => acc + cur);
    
    if(oddSum > evenSum) {
        return oddSum;
    }else if(oddSum > evenSum) {
        return evenSum;
    }else {
        return evenSum;
    }
}