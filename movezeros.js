function movezeros(nums){
        let index=0;
    for(let i of nums){
        if(i!==0){
            nums[index] = i;
            index++;
        }
    }

    for(let i=index;i<nums.length;i++){

        
            nums[i] = 0;
    }

    return nums;
}

console.log(movezeros([0,1,0,3,12]));