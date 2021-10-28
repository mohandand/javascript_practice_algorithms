var missingNumber = (nums) => {
        let n = nums.length;
        let arra = [];
        for(i=0;i<=n;i++)
        {
            arra.push(i);
        }
        let nums1 = nums.join("");
        for(i=0;i<arra.length;i++){
            let status = nums1.includes(arra[i]);
            if(!status){
                return arra[i];
            }
        }
}

console.log(missingNumber([44,26,34,25,23,42,0,43,38,14,47,19,49,6,16,41,24,35,10,4,32,5,8,15,31,3,46,22,2,30,28,37,1,21,39,45,9,48,36,17,7,27,18,29,13,40,11,20,12]));