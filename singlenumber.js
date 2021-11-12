//

var singleNumber = function(nums) {
  
    var obj = {}
        for(item of nums){
            (item in obj) ? obj[item]= obj[item] + 1 : obj[item] = 1;
        }

        const keys = Object.keys(obj);
        
        for(item in obj){
            if(obj[item]==1)
            {
                return item;
            }
        }

};

console.log(singleNumber([1,2,2,3,3]));
