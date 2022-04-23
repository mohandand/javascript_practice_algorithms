const searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      const value = nums[mid];
      if (value < target) {
        left = mid + 1;
      } else if (value > target) {
        right = mid - 1;
      } else {
        return mid;
      }
    }
  
    return left;
  };