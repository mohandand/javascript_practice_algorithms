var minWindow = function (s, t) {
    let output = "";
    let [left, right] = [0, -1];
    let map = {};
  
    for (let i = 0; i < t.length; i++) map[t[i]] = map[t[i]] + 1 || 1;
    let uniqueChars = Object.keys(map).length;
  
    while (right <= s.length) {
      // if we found a valid substring
      if (uniqueChars == 0) {
        let current = s[left];
        if (map[current] != null) map[current]++;
        if (map[current] > 0) uniqueChars++;
  
        let temp = s.substring(left, right + 1);
        if (output == "") output = temp;
        else output = output.length < temp.length ? output : temp;
        left++;
      } else {
        right++;
        let current = s[right];
        if (map[current]!= null) map[current]--;
        if (map[current] == 0) uniqueChars--;
      }
    }
    return output;
  };

  console.log(minWindow("ADOBECODEBANC","ABC"))
  