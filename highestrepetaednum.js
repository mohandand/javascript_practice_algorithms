/*Question: In given Array print the number which is reapeted for
 highest number of times.

 Ex: Input:[1,2,3,4,4,4,5,6,7] o/p: 4 as four repaeated highest number of times
*/

const highestRepeatedNumber = (array) =>{

    const obj={};

    for(let item of array){
        // if(item in obj){
        //     obj[item]= obj[item] + 1;

        // }else{
        //     obj[item] = 1;

        // }
        (item in obj) ? obj[item]= obj[item] + 1 : obj[item] = 1;
      }
      let temp = 1;
      for(item in obj)
      {
          (obj[item] >= temp) ? temp = obj[item]: temp =temp;
      }
      
      const keys = Object.keys(obj);
      console.log(keys);
      const key = keys(obj).find(key => obj[key] === temp);
      //const key = Object.keys(obj).find(key => obj[key] === temp);

      return key;
}

console.log(highestRepeatedNumber([1,1,1,2,2,3,3,6,4,5,7,7,7,7]));