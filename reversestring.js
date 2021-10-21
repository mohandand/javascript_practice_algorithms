// const revstring = (str) => {

//     let array = str.split("");
//     console.log(array);
//     array.reverse();
//     console.log(array);
//     return string = array.join("");

// }

// console.log(revstring("Mohan"));
let rev= '';
const revString = (str) => {
    for(let char of str)
    {
        rev = char +rev;
    }
    return rev;
}

console.log(revString("Raju"));

//one liner:
//console.log(str.split("").reverse().join(""));