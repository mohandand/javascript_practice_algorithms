//First Approch
function capitalize(title){
    let words = title.split(" ");
    let res = '';
    for(let i = 0 ;i<words.length;i++){
        if(words[i].length>1){
            let temp =  words[i][0].toUpperCase() + words[i].slice(1,words[i].length+1).toLowerCase();
            res = res + temp + ' ';
        }else{
            let temp = words[i].toLowerCase();
            res = res + temp + ' ';
        }
    }   
   return res.trim();//to remove space at start and end
}

console.log(capitalize("capiTalIze tHe titLe"))

const  capitalizeTitle =(title)=> {
    const words = title.toLowerCase().split(' ');
   
  return words.map((word,index)=>word.length  > 2  ?  word[0].toUpperCase() + word.slice(1) : word).join(" ")
    
  };