

const firstNonRepeatChar = (string) => {

   let  strarray = string.split('');

    len = strarray.length;
    

    for(let i=0;i<len;i++)
    {
        let seenDuplicate = false;
        
        for(let j=1;j<len;j++){
              if(strarray[i] == strarray[j] && i!==j)
                 {
                    seenDuplicate = true;
                    break;
                }
                
            }
            if (!seenDuplicate) {return strarray[i];}
    }
    return '-';
}

console.log(firstNonRepeatChar("aabcbcdeedfadad"));