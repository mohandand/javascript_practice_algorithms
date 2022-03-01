function findd(s,t){
    let ssort = s.split('').sort();
    return t.split('').sort().find((char, i) => char !== ssort[i] )
}

console.log(findd("abcdef","abcghdef"));