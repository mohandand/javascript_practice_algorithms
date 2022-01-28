var maxArea = function(height) {
    let res = 0 ;
  let left = 0;
  let right = height.length-1;

  while(left<right){
      let smallestside = Math.min(height[left] , height[right]);
      let area = (right-left) * smallestside;

      if(area>res) res=area;

      (height[left]>height[right]) ? right-- : left++
  }

  return res;
};