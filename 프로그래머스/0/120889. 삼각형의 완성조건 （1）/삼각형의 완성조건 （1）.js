function solution(sides) {
    const max = Math.max(...sides); 
    const index = sides.indexOf(max); 
    sides.splice(index, 1); 
    let arr = sides.reduce((acc, item) => acc + item, 0)
    
    if(max < arr) {
        return 1;
    }else {
        return 2;
    }
}
