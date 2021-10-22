
//Approach1
// function openorSenior(data){
//     let array = [];
//     for(i=0;i<data.length;i++)
//     {
//             let j=0;
//             if(data[i][j]>54 && data[i][j+1]>7)
//             {
//                 array.push("Senior");
//             }
//             else{
//                 array.push("Open");
//             }
//     }
    
//     return array
// }

// console.log(openorSenior([[18,20],[61,12],[21,21],[78,9]]));

//Approach-2

const openorSenior = (data) => data.map((item) => (item[0]>55 && item[1]>7) ? 'Senior' : 'Open');

console.log(openorSenior([[18,20],[61,12],[21,21],[78,9]]));

//program about dividing pepole into either open category or Senior based on age and handicap value.