// const revstring = (str) => {

//     let array = str.split("");
//     console.log(array);
//     array.reverse();
//     console.log(array);
//     return string = array.join("");

// }

// console.log(revstring("Mohan"));
//second Method
// let rev= '';
// const revString = (str) => {
//     for(let char of str)
//     {
//         rev = char +rev;
//     }
//     return rev;
// }

// console.log(revString("Raju"));

//one liner-third method

const revstring = (str) => {

    return str.split("").reverse().join("");
}
console.log(revstring("RAJU"));