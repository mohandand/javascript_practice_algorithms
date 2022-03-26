//Take input and output variable
//Create array with all aplhabets.
// remove other than alphabets form a string
// loop through string and find it index and push it to res array.

function postion(str){
    let res = [];
    let alpha = "abcdefghijklmenopqrstuvwxyz"
    let alphabets = str.toLowerCase().replace(/[^a-zA-Z]/g,'');
    let alphaarray = alpha.split("")
    for(let char of alphabets){
        res.push(alphaarray.indexOf(char) +1 )
    }
    return res;
}

console.log(postion("abc123"))