function revnumber(n){
    if(n==0){
        console.log(sum)
        return sum
    }

    let lastdigit = n%10;
    n = Math.floor(n/10)
    sum = sum * 10 +lastdigit
    return  revnumber(n)
}
let sum =0
console.log(revnumber(421))