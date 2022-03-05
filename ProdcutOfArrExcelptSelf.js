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
    for(let i=1;i<nums.length-1;i++){
       res[0]=postfix[1]
       res[nums.length-1] =prefix[nums.length-2]
       res[i] = prefix[i-1]*postfix[i+1]
    }
    return res;
};
console.log(productExceptSelf([0,0]))