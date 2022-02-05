function climbTree(n){
    let one  =1;
    let two = 1;
  let temp;
    for(let i =0 ; i<n-1;i++){
        temp = one;
        one=one+two;
        two=temp;
    }

    return one
}

// lets say we have to climbe 3 tall tree 
// to climb 3 we have to up 1step