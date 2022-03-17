function aplace(str){
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  let alphaarr = alpha.split("");
  let res = [];
  let cstr = str.replace(/[^a-zA-Z]/g,'')
  console.log(cstr)
  for(let char of cstr){
    
     res.push((alphaarr.indexOf(char)) + 1);
  } 
 return res;
}

console.log(aplace("abcde#"))




