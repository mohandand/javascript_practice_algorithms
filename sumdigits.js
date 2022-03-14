//Sum of digits recursive approach and best approch

var addDigits = function(num) {
    if (num < 10) return num;
    const numString = num.toString();
    const numArray = numString.split('');
    let sum = 0;
    
    for (const numStr of numArray) {
        sum += parseInt(numStr); //converting string to int
    }
    
    return addDigits(sum);  //recursive calling
 };

console.log(addDigits(128));//calling function

// output should be 1+2+8