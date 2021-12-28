//

var singleNumber = function(nums) {
  
    var obj = {}
    for(let i of nums){
        (obj[i]) ? obj[i]++ :obj[i]=1
    }

        const keys = Object.keys(obj);
        
        for(item in obj){
            if(obj[item]==1)
            {
                return item;
            }
        }

};

console.log(singleNumber([1,5,2,2,3,3]));
