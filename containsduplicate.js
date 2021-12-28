function containsduplicate(array) {

    let obj={};

    for(let i of array){
        (obj[i]) ? obj[i]++ :obj[i]=1
    }
    let keys = Object.values(obj);

    let res = keys.every((item) => item<=1)


    return res;

}

console.log(containsduplicate([1,2,3,4,5,1]));