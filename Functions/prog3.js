// BEAN COUNTING
function countBs(text){
    let count = 0;
    for(character of text){
        if(character === 'B')
            count++;
    }
    return count;
}

function countChar(text , char){
    let count = 0;
    for(character of text){
        if(character === char)
            count++;
    }
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));