var isIsomorphic = function(s, t) {
    let smap = {}
    let tmap = {}
    if(s.length !== t.length) return false
   for(let i=0;i<s.length;i++){
       let schar = s[i]
       let tchar = t[i]
       if(smap[schar] == undefined){
           smap[schar] = tchar
       }
       if(tmap[tchar] == undefined){
           tmap[tchar] = schar
       }
       if(smap[schar] != tchar || tmap[tchar] != schar){
           return false
       }
   }
    return true
};