var twoSum = function(nums, target) {
  let map= {}
  for(let i=0;i<nums.length;i++){
      let diff = target - nums[i]
      console.log(diff)
      if(map[diff] !== undefined){
          return [map[diff] , i]
      }
      map[nums[i]] = i
    }
  }
  console.log(twoSum([2,7,11,15],9));