
const symbols = {
    "(" : ")",
    "{" : "}",
    "[": "]",
}
const symbols1 = {
    ")" : ")",
    "}" : "}",
    "]": "]",
}
var isValid = function(s) {

    var count = 0;
  
  for(i=0;i<s.length;i++)
  {
      if(symbols[s[i]]===symbols1[s[i+1]]  )
      {
            i++;
      } else if (symbols[s[i]]===symbols1[s[s.length - (i+1)]]){
          
        count++;
      }
      else{
          return false;
      }
  }
        return true;
};

console.log(isValid("){"));