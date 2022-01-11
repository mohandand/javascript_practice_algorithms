var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    let prefix = '';
    let n;
    //let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < strs[0].length; i++) {
      let char = strs[0][i];
      console.log(char);
      if (strs.every(str => str[i] === char)) {
        prefix += char;
      } else {
        break;
      }
    };  
    return prefix;
  };


console.log(longestCommonPrefix(["fowerab","alowab","blightab"]));