var longestCommonPrefix = function(strs) {
  if (s.length === 0) return true
  if (s.length === 1) return false
  if (s.length % 2 !== 0) return false
    let prefix = '';
    //let maxPrefixLength = Math.min(...strs.map(str => str.length));
    for (let i = 0; i < strs[0].length; i++) {
      let char = strs[0][i];
      if (strs.every(str => str[i] === char)) {
        prefix += char;
      } else {
        break;
      }
    };  
    return prefix;
  };


console.log(longestCommonPrefix([]));