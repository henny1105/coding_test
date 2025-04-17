function solution(phone_book) {
    let sort = phone_book.sort();
    
    console.log(sort)
    
    for(let i = 0; i < phone_book.length - 1; i++) {
        let number = phone_book[i + 1].startsWith(phone_book[i]);
        
        if(number) {
            return false;
        }
    }
    
    return true;
}