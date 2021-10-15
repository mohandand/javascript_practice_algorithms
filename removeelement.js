var removeElement = function(nums, val) {
    
    var arr1 = nums.filter((value) => {
        return value != val;
    })
    
  
    var k = arr1.length;
    
     return k;       
}

console.log(removeElement([3,2,2,3],2));