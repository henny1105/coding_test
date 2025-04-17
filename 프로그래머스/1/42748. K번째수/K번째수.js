function solution(array, commands) {
    let result = [];
    commands.map(([i, j, k]) => {
        let slice = array.slice(i - 1, j);
        slice.sort((a,b) => a-b);
        result.push(slice[k-1]);
    })
    return result;
}