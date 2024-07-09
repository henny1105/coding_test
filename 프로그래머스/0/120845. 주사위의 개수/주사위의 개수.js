function solution(box, n) {
    let maxCubes = 1; 

    for (let i = 0; i < box.length; i++) {
        maxCubes *= Math.floor(box[i] / n);
    }
    
    return maxCubes;
}