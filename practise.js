function uni(str){
  let obj ={};
  for(let char of str){
    obj[char]?obj[char]++:obj[char]=1
  }
  for(let item in obj){
    if(obj[item]>1){
      return false
    }
  }
  return true
}
console.log(uni("123ab"))