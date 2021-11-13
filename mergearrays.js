// function mergeArrays(a, b) {
    
//     let temparry = [];
    
//     let length = (a.length>b.length) ? a.length : b.length
    
//     for(let i=0 ; i<length; i++)
//       {
//         if(a[i]!==undefined && b[i]!==undefined){
//                temparry.push(a[i]);
//                temparry.push(b[i]);
//           }
//         else if(a[i]!==undefined) 
//           {
//             temparry.push(a[i]);
//             }
//             else{
//                 temparry.push(b[i]);
//             }
//       }
    
//     return temparry
//   }

//Approch two

  function mergeArrays(a, b) {
    var answer = [];
    for (i = 0; i < Math.max(a.length, b.length); i++){
      if (i < a.length) {answer.push(a[i]);}
      if (i < b.length) {answer.push(b[i]);}
    }
    return answer; 
  }

  console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));
  console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5,6,7,8]));

//   Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]