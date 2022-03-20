function rotatematrix(x){
   let absres = Math.abs(x).toString().split("").reverse().join("")
   return absres*Math.sign(x)
  };
   
  console.log(rotatematrix(-123));