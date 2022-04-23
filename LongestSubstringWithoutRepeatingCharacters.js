/*
We can use the Sliding Window technique for this question. Sliding Window is good for analysing subsets within a data structure, to see which subset is the best. There are two approaches; fixed sized and dynamic. This solution uses the dynamic approach where the window is not a fixed size and can grow and shrink.

Sliding Window uses two pointers to define the boundary of the subset (this is the window). In this example left and i are the left and right pointers, respectively.

To solve the problem of finding the longest unique substring we use Set to store the characters. Before adding to the Set we first check if it already exists. If it does exist, we remove all the characters in the Set from the left (using our left pointer) until the duplicate character has been removed.

maxLength tracks the largest substring, after each iteration we set maxLength to itself or the size of the Set which ever is largest.
*/

function lengthOfLongestSubstring(s){
    let maxLength = 0,
    left = 0,
    chars = new Set();
  
    for (let i = 0; i < s.length; i++) {
      while (chars.has(s[i])) {
        chars.delete(s[left]);
        left++;
      }
  
      chars.add(s[i]);
      maxLength = Math.max(maxLength, chars.size);
    }
  
    return maxLength;
}
console.log(lengthOfLongestSubstring("pwwkew"))