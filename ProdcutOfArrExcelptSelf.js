var productExceptSelf = function(nums) {
    let prefix = [];
    let postfix=[nums.length];
    let res=[];
    let intial = 1;
    let a =1
    for(let i=0;i<nums.length;i++){
        let mul = nums[i]*intial;
        prefix.push(mul);
        intial=mul
    }
    for(let i=nums.length-1;i>=0;i--){
        let mul = nums[i]*a;
        postfix[i]=mul;
        a=mul
    }
    return postfix;
};
console.log(productExceptSelf([1,2,3,4]))