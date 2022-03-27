// use reguler expression to check it includes any vowel

function vowelcount(str){
    let count=0;
    for(let char of str){
        if(char.match(/[aeiou]/g)){
            count++;
        }
    }
    return count;
}
console.log(vowelcount("aeiou"))