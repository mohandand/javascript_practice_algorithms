//input : [1,2,3,4]
// product of left array = [1,1,2,6]
// product of right array = [24,12,4,1]  //do it from right
// soluton is  [(1*24),(1*12),(2*4),(6*1)]
//dource: https://www.youtube.com/watch?v=-3KG82kuD78


let productofarray = function(array){
    let res = [];g
    let leftarray=[];
    let rightarray=[]
    //construting left subarray

    for(let i=0;i<array.length-1;i++){
        if(leftarray.length==0){
            leftarray.push(1);
        }
        else{
            leftproduct.push(leftarray[i-1]*array[i-1]);
        }
    }

    for(i=nums.length-1;i>-1;i--){
          
        if(rightarray.length==0){
            rightarray.push(1);
        }
        else{
            rightarray.unshift(leftarray[0]*array[i-1]);
        }
    }   
  //Populating solution
  
    for(i=0;i<leftproduct.length;i++)
    {
        solution.push(leftarray[i]*rightarray[i]);
    }

    return solution;
}