var twoSum = function(nums, target) {
    
    for(i=0 ; i<=nums.length ;i++)
        {
            for(j=1;j<=nums.length;j++)
            {
                
                if(nums[i] + nums[j] ==target)
                    {
                        return arry = [i,j];
                    }
            }
        }
    
};



console.log(twoSum([2,3,4,5] , 5));