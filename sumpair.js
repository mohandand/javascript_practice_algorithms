var sumPair = function(a , t){

let count = 0;

let iteration =0
    for(i=0;i<=a.length;i++)
    {
        for(j=i+1;j<a.length;j++)
        {
            iteration++;
            if(a[i] + a[j] == t){
                count++;
            }
        }
    }
    console.log(iteration);
    return count;
}


console.log(sumPair([1,2,6,3,4],4));

// input : 4

//output : 2 - [1,3] and [4,0]