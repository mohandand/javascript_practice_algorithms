function rotatearray(array , r){
    let res=[];

    for(let i=r ; i<=r ;i--){
        let temp = [array[i]]
        res = [...temp, array];
        res.pop();
    }
    return res;
}

console.log(rotatearray([1,2,3,4,5,6,7],3))