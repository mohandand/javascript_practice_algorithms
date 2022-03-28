//create objects for two arrays 

//push values into array and decrease the count of number of keys in that object

function ia(arr1,arr2){
    let obj1 = {}
    let obj2 = {}
    let res = []
    for(let i=0;i<arr1.length;i++){
        obj1[arr1[i]]? obj1[arr1[i]]++ : obj1[arr1[i]]=1
    }
    for(let k of arr2){
        if(obj1[k]>0){
            res.push(k)
        }
    }
    return res
}
console.log(ia([1,2,3,4,3],[1,2,3,3]))