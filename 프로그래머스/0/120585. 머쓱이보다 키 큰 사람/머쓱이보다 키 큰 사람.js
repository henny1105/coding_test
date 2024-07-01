function solution(array, height) {
    const tall = array.filter(personHeight => personHeight > height);
    return tall.length;
}

