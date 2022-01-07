

//123 = 1*100 + 2*10 + 3*1
//321 =  3*100 + 2*10 + 1*1



// const revinteger = function(x){
//     if(x < -2147483648 || x>2147483648 || x===0) return 0;

//     //Checking given number is negative or positve.
//     const isNegative = x < 0 ? true : false ;
//     //convert given number to postive if its negative otherwise its same.
//     const pInt = Math.abs(x);
//     //lets find out length
//     const len = parseInt(Math.log10(pInt)) + 1;

//     let final =0 ;
//     let rem =pInt;

//     for(let i = len-1 ; i>=0 ;i--){

//     }

// }

//Simple Approch

var revinteger = function(x){
    const absReversed = Math.abs(x).toString().split('').reverse().join('');
    if (absReversed > 2**31) return 0;
    return absReversed *Math.sign(x);
}

console.log(revinteger(-12340));

// Math.sign(123) // -> 1
// // and
// Math.sign(-123) // -> -1