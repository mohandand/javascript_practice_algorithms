function sumofdigits(n){
    if(n==0){
        return n
    }
    let dig = n%10
    n = Math.floor(n/10)
    return dig + sumofdigits(n);
}

console.log(sumofdigits(1232))