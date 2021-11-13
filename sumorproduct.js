function sumOrProduct(array, n) {
  
    let sortedarray1 = array.sort(function(a,b){return b-a});
    //console.log(sortedarray1)
    let sum = 0;
    let product = 1;
    for(let i=0 ; i<n ; i++)
      {
        sum = sum + sortedarray1[i];
      }
      let count = 0;
      for(let j= sortedarray1.length-1; j>0 ; j--)
      {
        product = product * sortedarray1[j];
        count++;
        if(count === n) break;
      }
    //console.log(sum);
    //console.log(product);
    if (sum>product) return "sum"
    else if (product>sum)  return "product"
    else return "same"
  }
  console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));