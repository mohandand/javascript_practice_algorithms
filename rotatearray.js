// function rotatearray(array , r){
//     let res=[];

//     for(let i=0 ; i<r ;i++){ 
//         array.unshift(array[array.length-1]);
//         array.pop();
//     }
//     return array;
// }

var rotatearray = function(nums, k) {
    
    let rotation = k % nums.length; //This is when k is greater than nums.length
    if (rotation === 0) return; //No rotation is needed
    
    let tmp = nums.slice(0,nums.length - rotation);  // create new array and dont change main array and slice(from ,until)
    nums.splice(0,nums.length - rotation); //// Edit same array  array.splice(index, number of elements)
    nums.push(...tmp);
};

console.log(rotatearray([1,2,3,4,5,6],5))