var minimumCost = function(cost) {
    cost.sort((b, a) => a - b);
 let sum = 0;
 for (let i = 0; i < cost.length; i += 3)
   sum += cost[i] + (cost[i + 1] || 0);
 return sum;
};

console.log(minimumCost([6,5,7,9,2,2]));