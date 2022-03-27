// convert array to object key and value paris 
// push unique elemnts into array and return length of array.

function runique(arr){
  let obj={}
  let res =[];
  for(let i=0;i<arr.length;i++){
    obj[arr[i]] ? obj[arr[i]]++ :obj[arr[i]]=1
  }
  for(item in obj){
    if(obj[item] == 1){
        res.push(item)
    }
  }
  return res;
}

console.log(runique([0,0,1,1,1,2,2,3,3,4]))