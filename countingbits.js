//dynamic programing
var countBits = function(n) {
    let dp = [0]; 
    dp.length = n + 1; 
    offset =  1;
    
for(let i = 1 ;i<n+1 ; i++)
{
    if(offset * 2 == i) offset = i; //pattern detected
    let dif = i - offset;
    console.log(dif)
    dp[i] = 1+dp[dif]
}
  return dp
    
};

console.log(countBits(3))