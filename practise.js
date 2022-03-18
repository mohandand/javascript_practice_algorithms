function rot(array,k){
    let rotate = k % array.length;
    console.log(rotate)
    if(array.length==0) return array
    let temp =  array.slice(0,array.length-rotate);
    array.splice(0,array.length-rotate);
    console.log(array)
    array.push(...temp)
     return array;
}

console.log(rot([1,2,3,4,5,6],2))

