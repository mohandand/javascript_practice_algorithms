//Approach-1
// const revstring = (str) => {

//     let array = str.split("");
//     console.log(array);
//     array.reverse();
//     console.log(array);
//     return string = array.join("");

// }

// console.log(revstring("Mohan"));
// Approach-2
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
//Approach-3
// const revstring = (str) => {

//     return str.split("").reverse().join("");
// }
// console.log(revstring("RAJU"));

//Approcah-4

function revstring(s){
    let left = 0;
    let right = s.length-1;
    while(left<right){
        let hold = s[left];
        s[left] = s[right];
        s[right] =hold;
        left++;
        right--;
    }

    return s;
}

console.log(revstring("RAJU"));