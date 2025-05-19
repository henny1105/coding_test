function solution(nums) {
    let length = nums.length / 2;
    let unique = [...new Set(nums)];
    
    if(length > unique.length) {
        
        return unique.length;
    }else {
        return length;
    }
}