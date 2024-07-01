function solution(price) {
    let result = 0;

    if (price >= 500000) {
        result = price * 0.8;
    } else if (price >= 300000) {
        result = price * 0.9;
    } else if (price >= 100000) {
        result = price * 0.95;
    } else {
        result = price;
    }

    return Math.floor(result);
}