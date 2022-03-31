function findEvenIndex(arr)
{
  let stsum = []
  let count = 0;
  for(let i=0;i<arr.length;i++){
    count = count + arr[i]
    stsum[i] = count;
  }
  return stsum;
}

console.log(findEvenIndex([1,2,3,-4]))