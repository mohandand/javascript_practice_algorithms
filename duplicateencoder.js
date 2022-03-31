function duplicateEncode(word){
    let word1 = word.toLowerCase(word)
   let wordarray = word1.split("")
   let obj={};
   let res=[];
  for(let char of wordarray){
    obj[char]?obj[char]++:obj[char]=1
  }
  for(let i=0;i<wordarray.length;i++){
       if(obj[wordarray[i]] > 1){
          res.push(")")
       }else{
         res.push("(")
       }
  }
  return res.join("")
}
