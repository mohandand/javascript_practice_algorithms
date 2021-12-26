/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(haystack.length==0 && needle.length==0){
              return 0;
      }
      let res = haystack.indexOf(needle);
      return res;
};