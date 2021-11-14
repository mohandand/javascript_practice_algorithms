function sumTriangularNumbers(n) {
    let sum = 0
    for (let i=0, j=1; i<n; i++, j += i+1) {
      sum += j
    }
    return sum
  }

  console.log(sumTriangularNumbers(3));

//   function sumTriangularNumbers(n) {
//     var sum = 0;  
//     for(var i = 1; i <= n; i++)
//     {
//     sum += (i*(i+1))/2;
//     }
//     return sum;
//     }