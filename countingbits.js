var countBits = function(n) {
    let dp = [0]; //dynamic programing
    dp.length = n + 1;
    offset =  1;
    
for(let i = 1 ;i<n+1 ; i++)
{
    if(offset * 2 == i) offset = i;
    let dif = i - offset;
    console.log(dif)
    dp[i] = 1+dp[dif]
}
  return dp
    
};

console.log(countBits(3))