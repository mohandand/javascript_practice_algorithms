function countzeros(n){
    
    if(n==0){
        return count;
    }
    let rem = n%10;
    if(rem == 0){
        count++
    }

    n = Math.floor(n/10)

    return countzeros(n)
}

let count  =0;

console.log(countzeros(12020304090))