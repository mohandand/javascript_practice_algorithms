
//[7,1,5,3,6,4]
function buyandsellstock(prices){
    buy= prices[0];
    prices[0] = 0;
    let profit = 0;
    for(let i=1;i<prices.length;i++){
        if(buy>prices[i]){
            buy=prices[i];
        }else{
            profit = Math.max(prices[i]-buy ,profit)
        }
    }
    return profit;
}
console.log(buyandsellstock([2,4,1]));