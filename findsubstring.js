var strStr = function(haystack, needle) {
        // let res = haystack.includes(needle);
        if(haystack.length==0 && needle.length==0){
                return 0;
        }
        let res = haystack.indexOf(needle);
        return res;
};

console.log(strStr("Howareyou","are"));
