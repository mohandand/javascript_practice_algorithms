function movezeros(array){
    let res =[];
    let zero = [];
    for(let i=0;i<array.length;i++){
        if(array[i]!=0){
            res.push(array[i])     
        }else{
            zero.push(array[i])
        }
    }
    return [...res,...zero]
}
console.log(movezeros(([0,1,0,3,12])))