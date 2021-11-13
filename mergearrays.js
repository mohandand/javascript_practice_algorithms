function mergeArrays(a, b) {
    
    let temparry = [];
    
    let length = (a.length>b.length) ? a.length : b.length
    
    for(let i=0 ; i<length; i++)
      {
        if(a[i]!==undefined && b[i]!==undefined){
               temparry.push(a[i]);
               temparry.push(b[i]);
          }
        else if(a[i]!==undefined) 
          {
            temparry.push(a[i]);
            }
            else{
                temparry.push(b[i]);
            }
      }
    
    return temparry
  }

  console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));
  console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5,6,7,8]));

  