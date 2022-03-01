function findd(s,t){
    let ssort = s.split('').sort();
    let tsort = t.split('').sort();
    return tsort.find((char,i) => char !==ssort[i]);
}
console.log(findd("abc","acd"))