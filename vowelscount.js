const vowelsCount = (string) => {
    let vowelcount=0;
    for(letter of string){
        if(letter.match(/[aeiou]/g))
        {
            vowelcount++;
        }
    }
    return vowelcount;
}

console.log(vowelsCount("aeiouaeioub"));