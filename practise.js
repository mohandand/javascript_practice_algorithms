// first check how many time you need to raotate by getting reminder

// Then slice last values how many you need to put first and last part of array

function rotate(arry,k){
   let rota = k%arry.length
   if(rota == 0) return arry
   let res = arry.slice(0,arry.length-k);
   arry.splice(0,arry.length-k)
   return [...arry, ...res]
}

console.log(rotate([1,2,3,4,5] , 2))