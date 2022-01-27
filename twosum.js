function twoSum(nums, target){
    const comp = new Map();
    const len  = nums.length;
    for(let i =0 ; i<len ; i++){
        if(comp[nums[i]]>=0){
            return [comp[nums[i]], i]
        }
        comp[target-nums[i]] = i;
    }

    return [];
}
console.log(twoSum([2,5,6,11] , 8));

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


// var twoSum = function(nums,target){
//     var map = {};
//     for(var i=0;i<nums.length;i++){
//         var m = target-nums[i];
//         console.log(m);
//         if(map[m] !==undefined){
//             console.log(`${map[m]} and ${i}`);
//             console.log(map);
//             return [map[m],i];
//         }
//         map[nums[i]]=i;
//     }
// }
// console.log(twoSum([2,5,5,11] , 10));