var maxProduct = function(nums) {
  let maxsoFar=nums[0]
  let minsoFar=nums[0]
  let res = nums[0]
  let tempmaxsoFar;
  for(let i=1;i<nums.length;i++){
      tempmaxsoFar = Math.max(nums[i],maxsoFar * nums[i],minsoFar * nums[i])
      minsoFar = Math.min(nums[i],maxsoFar * nums[i],minsoFar * nums[i])
      maxsoFar = tempmaxsoFar
      res = Math.max(res, maxsoFar)
  }
  return res
};
console.log(maxProduct([2,3,-2,4,-3]))