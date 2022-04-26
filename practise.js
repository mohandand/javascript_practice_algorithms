var longestPalindromeSubseq = function(s) {
  let maxlength = 0;
  for(let i=0;i<=s.length;i++){
      for(let j= i+1;j<=s.length;j++){
          let temp = s.substring(i,j)
          if(isPalindrome(temp)){
              maxlength = Math.max(maxlength, temp.length)
          }
      }
  }
  return maxlength
  function isPalindrome(str){
      let l=0;
      let r=str.length-1;
      while(l<=r && str.charAt(l)===str.charAt(r)){
          l++;
          r--;
      }
      return l>=r;
  }
};

console.log(longestPalindromeSubseq("abc"))
