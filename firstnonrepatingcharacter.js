
//Appraoch
// const firstNonRepeatChar = (string) => {

//    let  strarray = string.split('');

//     len = strarray.length;
    

//     for(let i=0;i<len;i++)
//     {
//         let seenDuplicate = false;

//         for(let j=1;j<len;j++){
//               if(strarray[i] == strarray[j] && i!==j)
//                  {
//                     seenDuplicate = true;
//                     break;
//                 }
                
//             }
//             if (!seenDuplicate) {return strarray[i];}
//     }
//     return '-';
// }

// console.log(firstNonRepeatChar("aabcbcdeedfadad"));

//Appraoch-2

// const firstNonRepeatChar = (string) => {
//     let  strarray = string.split('');
//     len=strarray.length;
//      for(let item of strarray)
//          {
//               let temp1 = strarray.indexOf(item);
//               let temp2 = strarray.lastIndexOf(item);

//               if(temp1===temp2)
//               {
//                   return item;
//               }

//           }
//           return '-';
// }
// console.log(firstNonRepeatChar("aabcbcdeedfadad"));

//Appraoch-3
const firstNonRepeatChar = (string) => {
    const obj= {}
    for(let item of string)
        {
            if(item in obj)//checkin whether property name in object or not
            {
                //console.log(item in obj);
                obj[item] = obj[item]+1;
            }
            else
            {
                obj[item] =1;
            }
        }
        console.log(obj);
//obj[item] = obj[item] = 1 || obj[item] =1 (this line do same as above content)
//returning object property whos values is one
     for(let elm in obj)
         {
                 if(obj[elm] === 1)
                  {
                     return elm;
                      }
        }
       return -1;
  }
console.log(firstNonRepeatChar("aabcbcdeedfadad"));