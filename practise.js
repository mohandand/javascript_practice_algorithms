// will buy on first day and profit =0

// on next day if buy is less than next day value then sell it other sie buy it and do the profit calculation

function bss(prices){
  let buy= prices[0];
  let profit=0;
  for(let i=1;i<prices.length;i++){
    if(buy > prices[i]){
      buy = prices[i]
    }else{
      profit = Math.max(prices[i]-buy , profit)
    }
  }
  return profit;
}
console.log(bss([7,1,5,3,6,4]))