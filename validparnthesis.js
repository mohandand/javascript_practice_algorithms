
const symbols = {
    "(" : ")",
    ")":")",
    "{" : "}",
    "}" : "}",
    "[": "]",
    "]": "]",
}
var isValid = function(s) {

    var count = 0;
  
  for(i=0;i<s.length;i++)
  {
      if(symbols[s[i]]===symbols[s[i+1]]  )
      {
            i++;
      } else if (symbols[s[i]]===symbols[s[s.length - (i+1)]]){
          
        count++;
      }
      else{
          return false;
      }
  }
        return true;
};

console.log(isValid("({[]})"));