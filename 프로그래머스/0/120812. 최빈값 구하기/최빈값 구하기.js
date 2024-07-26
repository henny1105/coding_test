function solution(array) {
    const counts = {};

    for (const num of array) {
        if (counts[num] === undefined) {
            counts[num] = 1; 
        } else {
            counts[num] += 1; 
        }
    }

    let mostFrequentNum = null;
    let maxCount = 0;
    let isMultiple = false;

    for (const num in counts) {
        const count = counts[num];

        if (count > maxCount) {
            maxCount = count;
            mostFrequentNum = Number(num);
            isMultiple = false; 
        } else if (count === maxCount) {
            isMultiple = true;
        }
    }

    if (isMultiple) {
        return -1;
    } else {
        return mostFrequentNum;
    }
}