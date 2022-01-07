function palindrome(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,''); //remove all elments other than a-z and 0-9
    for(let i=0 ,j=s.length-1 ;i<=j ;i++,j--){
        if(s.charAt(i) !== s.charAt(j)) return false
    }
    return true;
}
console.log(palindrome("A man, a plan, a canal: Panama"))