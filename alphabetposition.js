//basciall we are writing position of albet for all characters in a given string.
//like a=1 and b=2 c=3 d=4 ..etc
let alpha = "abcdefghijklmnopqrstuvwxyz";
let alphaarray = alpha.split("");
//console.log(alphaarray);
const alphabetPostion = (text) => {
const str = text.toLowerCase().replace(/[^a-zA-Z]/g ,'');//to remove all charcters other than alphabets including spaces

const res = str.split("").map((item,i) => {return alphaarray.indexOf(item) + 1})
return res;
}

console.log(alphabetPostion("The Sunset isn't Good as it is..?"));

//charCodeAt also works here.