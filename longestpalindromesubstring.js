function longpalindrom(str){
    if(str.length<1 || str === null) return '';
    let longest = '';
    for(let i = 0;i<str.length;i++){
    let oddPalindrome = expandFromCenter(str,i,i)  //for oddpalindrome we will have one center value AND
    let evenPalindrome = expandFromCenter(str,i-1,i) //for evenpalindrome we will have two center values which are middle ones

    if(oddPalindrome.length > longest.length){
        longest = oddPalindrome
    }
    if(evenPalindrome.length>longest.length){
        longest = evenPalindrome;
    }
}
return longest
}
function expandFromCenter(str, left, right){
    let j=0;
    while(str[left-j] && str[left-j] === str[right+j]){
        j++;
    }
    j--
    return str.slice(left-j,right+j+1)
}

console.log(longpalindrom("babad"))