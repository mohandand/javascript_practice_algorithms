function vowelscount(str){
    let count = [];
    for(letter of str){
        if(letter.match(/[aeiou]/g)){
            count++;
        }
    }
    return count;
}

console.log(vowelscount("aeioubbbb"))