function linearSearch(arr,target,index){
    if(arr.length === index){
        return -1
    }

    if(arr[index] === target){
        return index
    }
    
    return linearSearch(arr,target,index+1)
}

console.log(linearSearch([1,23,4,5] ,2,0))