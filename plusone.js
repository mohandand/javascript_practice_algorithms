// var strint = require("./strint");
// var plusOne = function(digits) {
//     let num ;
//         num = digits.join("");
//         var num2 = strint.parseInt(num);
//         let num1 = num2 + 1;
//         var myArr = String(num1).split("");
//         return myArr;
// };
var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
    digits[i]++; 
   if(digits[i] > 9){
       digits[i] = 0;
   }else{
       return digits;
   }
}
digits.unshift(1);
return digits;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,9,9,9]))

/* Explanation: first we check last digit is qqual 9 if that is true
then we need to set that to zero and check next last digit and if its not equal to zero then
increase it and return the value */