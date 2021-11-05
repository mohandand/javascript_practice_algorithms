
//Approach-1 brute force approch not su

// let a = [];

// const removeDuplicate = (array) => {
//     let len = array.length;
//     for(let i = 0;i<len;i++)
//     {
//         if(a.indexOf(array[i])=== -1)
//         {
//             a.push(array[i]);
//         }
//     }
//     return a;
// }

// console.log(removeDuplicate([1,2,3,4,5,3,5,3,2,1]));
 //Approach-2

// const removeDuplicate = (array) => {
// array.sort();
// const len = array.length;
// let temp ;
// let array1 = [];
// for(i=0;i<len ; i++)
// {
//     if(array[i] !== temp)
//     {
//         array1.push(array[i]);
//         temp=array[i];
//     }
// }

// return array1

// }
// console.log(removeDuplicate([1,2,3,4,5,3,5,3,2,1]));

//Approach-3 object based approach

const removeDuplicate = (array) =>{
    let obj = {};
  for(let i of array)
  {
      //console.log(i);
      obj[i] = "hi";  //key as to be unique it wont store any duplicates.
  }
 let obj1 = Object.keys(obj);
 return obj1;
}
// console.log(removeDuplicate([1,2,3,4,5,3,5,3,2,1]));

//Approach-4 set dont contain unique values

let a = [1,2,3,4,5,3,5,3,2,1];

let bSet = new Set(a);

console.log(bSet);

let array = [...bSet];

console.log(array);

// Approach-1 it will take near to n*n as its checking indexof all elements along with for loop
// Approach-2 it will be logn +n time Complexity as for soarting logn and for loop n times.
// Approach-3 so its only n complexity.
// Approach-3 so its only n complexity.
/*Program: removing duplicate elements form an array
Example Tc:
input :[1,2,3,4,5,3,5,3,2,1]
output: [1, 2, 3, 4, 5]*/