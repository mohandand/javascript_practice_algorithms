function firstnonrepeating(string){
let obj={}
string.split("").forEach((s) => {
    obj[s] ? obj[s]++ : obj[s] =1
})
        let values = Object.values(obj);
     for(item of values){
         if(item === 1){
             return item;
         }
     }
}
console.log(firstnonrepeating("aaabbccde"));