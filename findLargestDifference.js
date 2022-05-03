
// Approch-1:

function findLargestDiff(array){
    let currenmin = array[0];
    let currmaxdiff = 0;
    for(let i=1;i<array.length;i++){
        if(array[i]>currenmin && (array[i]-currenmin>currmaxdiff)){
            currmaxdiff = array[i]-currenmin
        }else if(array[i]<=currenmin){
            currenmin =array[i]
        }
    }
    return currmaxdiff
}
console.log(findLargestDiff([20, 3, 1, 10]))

// Approch-2 Brute force:
// function findLargestDiff(array){
//     let newarray = [...array];
//     newarray.sort((a,b) => {return a-b})
//     for(let j=array.length-1 ;j>=0;j--){
//         for(let i=0;i<array.length;i++){
//             let temp = newarray[j]-newarray[i]
//             if(array.indexOf(newarray[i])<array.indexOf(newarray[j])){
//                 return temp
//             }
//         }
//     }
// }
// console.log(findLargestDiff([7, 8, 4, 9, 9, 15, 3, 1, 10]))