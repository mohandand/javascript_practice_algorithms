function arrayself(array){
   let lefta =[];
   let leftpostion =1;
   for(let i=0;i<array.length;i++){
      lefta[i]=leftpostion;
      leftpostion*=array[i]
   }
   let righa=[]
   let rightpostion=1;
   for(let i=0;i<array.lenght;i++){
      righa[i] = rightpostion;
      righa[i]*=rightpostion;
      right[i]*=lefta[i]

   }

   return righa;
}