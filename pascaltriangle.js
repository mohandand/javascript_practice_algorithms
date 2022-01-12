
//Approach-1
// var generate = function(numrows){

//     var pascalT = new Array(numrows);

//     for(let i=0; i<numrows;i++){
//         let row = new Array(i+1); //generate row by row
//         row[0]=1  //first value of row always 1
//         row[row.length-1]=1 //last value of row always 1
//         for(j=1;j<row.length-1;j++){//to genrate in between values 

//             let rowabove = pascalT[i-1];
//             row[j] = rowabove[j] + rowabove[j-1];
//         } 
//         pascalT[i] = row; //adding each row as array to main array
//     }
//         return pascalT
// }

// console.log(generate(4));
//Approach-2

var generate = function(numRows) {
    var pascal = [];
    for (var i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (var j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
};