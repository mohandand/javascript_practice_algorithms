//Valid Paranthesis
var isValid = function(s){
  let bracket = {
      '(':')',
      '{':'}',
      '[':']'
  }
  let heap= [];
  for(char of s){
      if(bracket[char]){
          heap.push(bracket[char]);
      }else{
          if(!heap.pop()==char) return false
      }
  }
  return (!heap.length)
}

console.log(isValid('(]'));