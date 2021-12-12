// var twoSum = function(nums, target) {
    
//     for(i=0 ; i<=nums.length ;i++)
//         {
//             for(j=1;j<=nums.length;j++)
//             {
                
//                 if(nums[i] + nums[j] ==target && i!=j)
//                     {
//                         return arry = [i,j];
//                     }
//             }
//         }
    
// };


// console.log(twoSum([2,5,5,11] , 10));

//need to write twosum with object


var twoSum = function(nums,target){
    var map = {};
    for(var i=0;i<nums.length;i++){
        var m = target-nums[i];
        if(map[m] !==undefined){
            return [map[m],i];
        }
        map[nums[i]]=i;
    }
}
console.log(twoSum([2,5,5,11] , 10));