function noofonebits(n){
    let obj={};
    let m= n.toString(2)
    if(!m.includes(1)) return 0;
    for(let char of m){
        obj[char] ? obj[char]++ : obj[char]=1
    }

    return obj[1] ;
}

console.log(noofonebits(11111111111111111111111111111101));