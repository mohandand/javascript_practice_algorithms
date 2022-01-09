// var missingNumber = (nums) => {
//         let n = nums.length;
//         let arra = [];
//         for(i=0;i<=n;i++)
//         {
//             arra.push(i);
//         }
//         let nums1 = nums.join("");
//         for(i=0;i<arra.length;i++){
//             let status = nums.includes(arra[i]);
//             if(!status){
//                 return arra[i];
//             }
//         }
// }

var missingNumber =(nums) => {
    let n = nums.length + 1
    for(let i=0 ;i<=n;i++){
        if(!nums.includes(i)){
            return i
        }
    }
}



console.log(missingNumber([1,2,4,0]));