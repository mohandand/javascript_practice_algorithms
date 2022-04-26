var longestPalindromeSubseq = function(s) {
     let max=0;
    const arr=[];
    for(let i=0;i<s.length;i++){
        countPalindrome(s,i,i); // odd length
        countPalindrome(s,i,i+1); // even length
        
    }
    return arr[0];
    function countPalindrome(str,left,right){
        while(left>=0 && right<str.length && str[left]===str[right]){
            let temp =str.substring(left,right+1);
            if(max > temp.length){
                max  = max
            }else{
               max = temp.length
               arr[0] =temp
            }
            left--;
            right++;
        }
    }
};
console.log(longestPalindromeSubseq("bbbab"))