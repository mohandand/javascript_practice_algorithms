function rot(array){
    return array.repeat(2).slice(1,-1).includes(array);
}

console.log(rot("abcabc"))

