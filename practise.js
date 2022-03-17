function uchar(str){
   let strar = str.split('');
      let obj = {};
   for(let i of strar){
     console.log(i)
     obj[i] ? obj[i]++ : obj[i]=1;
   }
}

console.log(uchar("aabcde"))



