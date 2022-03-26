//loop through string and store it in object format
//loop thorhgh object values and find for not equal to one
function unique(str){
    let obj ={};
    for(let char of str){
        obj[char] ? obj[char]++ :obj[char] = 1
    }
    let res = Object.values(obj).every((value) => value == 1 )

    return res;
}

console.log(unique("abcdefgaz"))