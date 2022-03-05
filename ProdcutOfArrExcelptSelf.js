var productExceptSelf = function(nums) {
    let prefix = [];
    let postfix=[];
    let res=[];
    let intial = 1;
    for(let i=0;i<nums.length;i++){
        let mul = nums[i]*intial;
        prefix.push(mul);
        intial=mul
    }
    for(let i=nums.length-1;i>nums.length;i--){
        let mul = nums[i]*intial;
        postfix.push(mul);
        intial=mul
    }
    return prefix;
};
console.log(productExceptSelf([1,2,3,4]))