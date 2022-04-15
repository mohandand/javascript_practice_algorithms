var productExceptSelf = function(nums) {
  let len = nums.length
  let leftarr = [];
  let rightarr = [];
  let leftmul =1;
  let rightmul=1
  for(let i=0,j=len-1;i<len && j>=0;i++,j--){
      leftarr[i] = leftmul
      leftmul = leftmul*nums[i]
       leftarr[j] = rightmul
      rightmul = rightmul* nums[j]
  }
  console.log(leftarr,rightarr)
};
console.log(productExceptSelf([1,2,3]))