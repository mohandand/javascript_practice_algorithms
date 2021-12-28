function intersectionofarrays(array1,array2){

    let obj1 ={};
    let res = [];

    for(i of array1){
        (obj1[i]) ? obj1[i]++ : obj1[i] = 1
    }
    
    for(let k of array2){
        if(obj1[k]>0){
           res.push(k);
           obj1[k]--;
        }
    }

    return res;
}

console.log(intersectionofarrays([1,2,3,4,3],[1,2,3,3]));