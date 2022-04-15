var productExceptSelf = function(nums) {
  let len = nums.length
  let leftarr = [];
  let rightarr = [];
  let leftmul =1;
  let rightmul=1
  let res=[]
  for(let i=0,j=len-1;i<len && j>=0;i++,j--){
      leftarr[i] = leftmul
      leftmul = leftmul*nums[i]
      rightarr[j] = rightmul
      rightmul = rightmul* nums[j]
  }
  for(let i=0;i<len;i++){
    res[i] = leftarr[i]*rightarr[i]
  }
 return res
};
console.log(productExceptSelf([1,2,3,4]))