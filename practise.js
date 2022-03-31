function findEvenIndex(arr)
{
  let stsum = []
  let revsum =[]
  let count = 0;
  for(let i=0;i<arr.length;i++){
    count = count + arr[i]
    stsum[i] = count;
  }
  for(let i=arr.length-1;i>=0;i--){
    count = count + arr[i]
    revsum[i] = count;
  }
  return revsum
}

console.log(findEvenIndex([1,2,3,-4]))