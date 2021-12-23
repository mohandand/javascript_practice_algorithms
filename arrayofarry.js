var obj1 = {
    var:[1,2,3,4],
    var1:[2,3,4,5],
    var3:[2,3,4,8]
    }
    let keys1= Object.values(obj1);
    
    var find = 3;
    
    let concatedarray = [];
    let result=[];

    // for(let i=0 ; i<keys1.length;i++){
    //     for(let j=0 ; j<keys1[i].length;j++)
    //     {
    //         if(keys1[i][j]==find){
    //             result.push(find);
    //         }
    //     }
    // }
    
    for(let i=0 ; i<keys1.length;i++)
    {
        concatedarray = concatedarray.concat(keys1[i]);
    }

    // result = concatedarray.filter((item) => {
    //     return item.includes(find);
    // })
    console.log(concatedarray);
    console.log(result);
    
    // result = keys1.map( (item) => {
    
    //    let res = item.filter((inneritem) => {
    //         return inneritem.includes(find);
    //   }
      
    //   )
    //   return res;
    
    // })
    
  