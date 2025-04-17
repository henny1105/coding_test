function solution(board, moves) {
    let basket = [];
    let count = 0;
    
    for(let i = 0; i < moves.length; i++) {
        let col = moves[i] - 1;
        
        for(let j = 0; j < board.length; j++) {
            let doll = board[j][col];
            
            if(doll !== 0) {
                board[j][col] = 0;
                
                if(basket[basket.length - 1] === doll) {
                    basket.pop();
                    count += 2;
                }else {
                    basket.push(doll);
                }
                
                break;
            }

        }
    }

    return count;
}