function firstnonrepeating(string){
let obj={}
string.split("").forEach((s) => {
    obj[s] ? obj[s]++ : obj[s] =1
})
        let values = Object.values(obj);

        console.log()
     for(item in obj){
         if(obj[item] === 1){
             return item;
         }
     }
}
console.log(firstnonrepeating("aaabbccde"));
// pr