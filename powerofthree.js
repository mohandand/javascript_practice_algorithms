function powerofthree(n){
    if(n==1) return false
    if(n<3) return false
    let sum = 3;
    for(let i=1 ;i<n ;i++){      
        if(sum===n){
            return true
        }
        if(sum>n){
            return false;
        }
        sum = sum * 3
    }
}

console.log(powerofthree(82));