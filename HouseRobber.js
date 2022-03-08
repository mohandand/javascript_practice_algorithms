function houseRob(nums){
    if(!nums.length) return 0
    if(nums.length==1) return nums[0];
    if(nums.length==2) return Math.max(nums[0],nums[1]);
    
    var maxAtTwoBefore = nums[0];
    var maxAtOneBefore = Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++){
        maxAtCurrent = Math.max(maxAtTwoBefore+nums[i],maxAtOneBefore);
        maxAtTwoBefore = maxAtOneBefore;
        maxAtOneBefore = maxAtCurrent;
    }
    return maxAtOneBefore;
}
console.log(houseRob([2,7,9,3,1]))