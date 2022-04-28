function sortedornot(arr,index =0){
    if(index ==arr.length-1){
        return true
    }
   return (arr[index]<arr[index+1] && sortedornot(arr , index+1))
}

console.log(sortedornot([1,2,6,4,5]))