//keep array in object
//and put all keys in an array 
//return length of array


function removeduplicatefromsortedarray(array){

    let obj = {};
    for(let i of array){
        (obj[i]) ? obj[i]++ : obj[i] =1;
    }
    
    let keys = Object.keys(obj);

    return keys;

}

console.log(removeduplicatefromsortedarray([1,2,2,1,3]));