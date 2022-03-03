function maxArea(array){
    let res = 0;
    let left=array[0];
    let right = array[array.length-1];
    while(left<right){
        let shortone = Math.min(array[left],array[right])
        let area = shortone * (right-left)
        if(area>res)  res=area;
       (array[left]>array[right]) ? right-- : left++ 
    }
  return res;
}

console.log(maxArea[1,8,6,2,5,4,8,3,7])