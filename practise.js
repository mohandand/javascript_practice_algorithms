function sumofDigits(num){
    if(num<10) return num;
    const numString = num.toString();
    const numArray = numString.split('');
    let sum=0;
    for(let bit of numArray){
        sum+=parseInt(bit)
    }

    return sumofDigits(sum);
}

console.log(sumofDigits(31))