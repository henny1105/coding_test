function solution(num_str) {
    const arr = num_str.split('').map(Number);
    return arr.reduce((acc, item) => acc + item, 0)
}