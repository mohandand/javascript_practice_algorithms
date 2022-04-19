function alpha(str){
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  let alphaarra = alpha.split('');
  let inputstr = str.toLowerCase().replace(/[^a-zA-Z]/g, '');
  let res =[];
   for(let i of str){
     res.push(inputstr.indexOf(i) + 1)
   }
   return res;
}
console.log(alpha("abcdeg"))