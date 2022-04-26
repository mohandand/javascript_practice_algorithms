function substring(s){
  let res =[];
  for(let i = 0;i<s.length;i++){
      for(let j= i+1;j<s.length;j++){
           res.push(s.substring(i,j))
      }
  }
  return res;
}

console.log(substring("abc"))