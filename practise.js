function anagram(strs){
    var groupAnagrams = function(strs) {
        let sortedarray = [];
        let sortedObject = {}
        let res =[];
        let temp =[];
    for(let i=0;i<strs.length;i++){
        let sortedword = strs[i].split('').sort().join("")
        sortedarray.push(sortedword)
    }
    for(let i=0;i<sortedarray.length;i++){
        sortedObject[sortedarray[i]] ? sortedObject[sortedarray[i]]++ : sortedObject[sortedarray[i]] =1
    }
   for(let item in sortedObject){
       for(var i=0 ;i<sortedarray.length;i++){
           if(item == sortedarray[i]){
               temp.push(strs[i])
           }
       }
          res.push([...temp])
           temp.length=0;
   }
   return res
};
}  

console.log(anagram(["cat","act","bat","tab","atb","tac"]))