function findLargestDiff(array){
    let currenmin = array[0];
    let currmaxdiff = 0;
    for(let i=1;i<array.length;i++){
        if(array[i]>currenmin && (array[i]-currenmin>currmaxdiff)){
            currmaxdiff = array[i]-currenmin
        }else if(array[i]<=currenmin){
            currenmin =array[i]
        }
    }
    return currmaxdiff
}
console.log(findLargestDiff([20, 3, 1, 10]))