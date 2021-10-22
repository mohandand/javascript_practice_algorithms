const removeDuplicate = (array) => {
array.sort();
const len = array.length;
let temp ;
let array1 = [];
for(i=0;i<len ; i++)
{
    if(array[i] !== temp)
    {
        array1.push(array[i]);
        temp=array[i];
    }
}

return array1

}
console.log(removeDuplicate([1,2,3,4,5,3,5,3,2,1]));



/*Program: removing duplicate elements form an array
Example Tc:
input :[1,2,3,4,5,3,5,3,2,1]
output: [1, 2, 3, 4, 5]*/