var maxProduct = function(nums) {
  let maxsoFar=nums[0]
  let minsoFar=nums[0]
  let res = nums[0]
  for(let i=1;i<nums.length;i++){
      maxsoFar = Math.max(nums[i],maxsoFar*nums[i])
      minsoFar = Math.min(nums[i], minsoFar*nums[i])
      if(nums[i]<0){
          let temp = maxsoFar;
          maxsoFar = minsoFar
          minsoFar = temp
      }
      res = Math.max(res, maxsoFar)
  }
  return res
};
console.log(maxsubarray([-2,1,-3,4,-1,2,1,-5,4]))