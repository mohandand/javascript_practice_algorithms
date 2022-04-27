function smallestSubWithSum(arr, n, x)
{
    // Initialize current sum and minimum length
    let curr_sum = 0, min_len = n + 1;
 
    // Initialize starting and ending indexes
    let start = 0, end = 0;
    while (end < n) {
        // Keep adding array elements while current sum
        // is smaller than or equal to x
        while (curr_sum <= x && end < n)
            curr_sum += arr[end++];
 
        // If current sum becomes greater than x.
        while (curr_sum > x && start < n) {
            // Update minimum length if needed
            if (end - start < min_len)
                min_len = end - start;
 
            // remove starting elements
            curr_sum -= arr[start++];
        }
    }
    return min_len;
}

console.log(smallestSubWithSum([9,4,1,23,3,26],6,25))









// function minarray(array,target){
//     array.sort((a,b) => {return b-a})
//     let sum =0;
//     let count =0;
//   for(let i=0;i<array.length;i++){
//       sum+=array[i]
//       count++
//       if(sum>=target){
//           return count;
//       }
//   }
// }
// console.log(minarray([1,4,45,6,0,19],51))

// function minarray(array,target){
//     let count =0;
//     let sum =0;
//     let end ;
//     for(let i =0;i<array.length;i++){
//         sum = sum+array[i]
//         count++
//         if(sum>target){
//             end =i;
//             break;
//         }
//     }
//     for(let i=0;i<array.length;i++){
//         sum = sum - array[i]
//         count--;
//         if(sum>target){
//             continue
//         }else{
//             console.log(array.slice(i,end+1))
//             return count+1
//         }
//     }  
// console.log(minarray([9,4,1,23,3,26],25))}
// console.log(minarray([1,4,45,6,0,19],51))
// console.log(minarray([1,10,5,2,7],9))
