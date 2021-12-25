function sumTriangularNumbers(n) {
    let sum = 0
    for (let i=0, j=1; i<n; i++, j += i+1) {
      sum += j
    }
    return sum
  }

  console.log(sumTriangularNumbers(3));

//   function sumTriangularNumberss(n) {
//     var sum = 0;  
//     for(var i = 1; i <= n; i++)
//     {
//     sum += (i*(i+1))/2;
//     }
//     return sum;
//     }

// [01]
// 02 [03]
// 04 05 [06]
// 07 08 09 [10]
// 11 12 13 14 [15]
// 16 17 18 19 20 [21]
// Example Instance: If 4 is given: 1 + 3 + 6 + 10 = 20.
