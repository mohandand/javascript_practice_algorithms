function lcp(strarr){
 for(let i =0 ;i<strarr[0].length;i++){
   for(let j=0;j<strarr.length;j++){
        if(strarr[0][i] !== strarr[j][i]) return strarr[0].slice(0,i)
   }
 }
}