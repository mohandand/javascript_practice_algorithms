function countprimes(n){
    if(n==0||n==1) return 0;
    let count1=0;
    let count;
    for(let i=2;i<=n;i++){
        count=0;
        for(let j=2;j<=n;j++){
                if(i%j==0){
                    count++;
                }
        }
       if(count==1){
        count1++; 
       }
    }
    return count1;
}

console.log(countprimes(9));