function sumDigits(num){
    if(num<10) return num;
    var numString = num.toString();
    var numArray = numString.split('');
    let sum = 0;
    for(let bit of numArray){
        sum+=parseInt(bit)
    }

    sumDigits(sum)
}

console.log(sumDigits(11))