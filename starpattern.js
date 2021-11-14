let temp=0;
let k = 0;
//let count =0;
for(let i =0 ; i<=3;i++){
    let count =0;
    for(let j=0;j<=i;j++){
         if(count==0) k = i+1;
        console.log(k);
        k++;
        count++;    
    }
    temp = temp+k;
}
console.log(temp);