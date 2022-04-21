
function findNumberSequence(direction) {
    let len = direction.length
    let seg = Math.pow(2,len)
    let segments = [];
    let sl = 0
    let sr = seg
    let centers = []
    let res =[]
    segments.push([sl,sr])
    for(let char of direction){
        let center = (sl + sr) / 2;
        if(char === 'L'){
            segments.push([sl,center])
            sr = center;
        }else{
            segments.push([center,sr])
            sl =center
        }
        centers.push(center)
    }
    console.log(centers)
    let centers_sort = [...centers];
    centers_sort.sort((a,b) => {return a-b})
    // console.log(centers_sort)
    console.log(centers)
    for(let i=0;i<centers.length;i++){
        console.log(centers)
        res.push(centers.indexOf(centers_sort[i]) + 1)
    }
    return res
}

console.log(findNumberSequence("LRLRRL"))