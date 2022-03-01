function findd(s,t){
    let ssort = s.split('').sort();
    let tsort = t.split('').sort();
    return tsort.find((char,i) => char !==ssort[i]); //find will return when ever it finds as per requirement
}
console.log(findd("abc","acd"))