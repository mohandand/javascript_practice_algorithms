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
// }
console.log(minarray([1,4,45,6,0,19],51))
console.log(minarray([1,10,5,2,7],9))
console.log(minarray([9,4,1,23,3,26],25))