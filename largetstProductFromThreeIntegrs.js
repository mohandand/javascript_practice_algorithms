function largeProductfromThreeNums(array){
    array.sort((a,b) => {return a-b})
    let product1 =1;
    let product2 = 1;
    let length = array.length-1
    for(let i=length;i>length-3;i--){
        product1 = product1 * array[i];
    }
    product2 = array[0] * array[1] * array[length]
    if(product1>product2){
        return product1
    }else{
        return product2
    }
}

console.log(largeProductfromThreeNums([-10, 7, 29, 30, 5, -10, -70]))