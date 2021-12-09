let alpha = "abcdefghijklmnopqrstuvwxyz";
let alphaarry = alpha.split("");
console.log(alphaarry);
let alphaNums = [];

function alphaposition(text){
    text = text.toLowerCase();
       for(let i = 0 ; i<text.length;i++){
           let idx = alphaarry.indexOf(text[i])
           if(idx===-1){
               continue;
           }
           else{
               alphaNums.push(idx+1)
           }
       }

       return alphaNums;
}

console.log(alphaposition("The Sunset isn't Good as it is..?&"));