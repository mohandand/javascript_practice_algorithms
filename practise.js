function maxsubarray(nums){
  let endIndex = 0;
  let currMax=nums[0];
  let globalMax=nums[0]
  for(let i=1;i<nums.length;i++){
      currMax = Math.max(nums[i] , nums[i]+currMax)
      if(currMax>globalMax){
        globalMax = currMax;
        endIndex =i;
      }
  }
  let cond=0
  let temp=endIndex
  for(let i=endIndex;i>=0;endIndex--){
     cond = cond+nums[endIndex];
    if(cond==globalMax){
        return nums.slice(endIndex,temp+1)
    }
  }

}
console.log(maxsubarray([-2,1,-3,4,-1,2,1,-5,4]))