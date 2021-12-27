function rotatearray(array , r){
    let res=[];

    for(let i=0 ; i<r ;i++){ 
        array.unshift(array[array.length-1]);
        array.pop();
    }
    return array;
}

console.log(rotatearray([1,2,3,4,5,6,7],3))