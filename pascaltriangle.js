var generate = function(numrows){

    var pascalT = new Array(numrows);

    for(let i=0; i<numrows;i++){
        let row = new Array(i+1); //generate row by row
        row[0]=1  //first value of row always 1
        row[row.length-1]=1 //last value of row always 1
        for(j=1;j<row.length-1;j++){//to genrate in between values 

            let rowbaove = pascalT[i-1];
            row[j] = rowbaove[j] + rowbaove[j-1];
        } 
        pascalT[i] = row;
    }
        return pascalT
}

console.log(generate(8));