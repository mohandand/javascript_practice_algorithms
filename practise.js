function anagram(array){
    let sortedarray = [];
    let sortedObject = {}
    for(let i=0;i<array.length;i++){
        sortedarray.push(array[i].sort())
    }
    for(let i=0;i<sortedarray;i++){
        sortedObject[sortedarray[i]] ? sortedObject[sortedarray[i]]++ : sortedObject[sortedarray[i]] =1
    }
    console.log(anagram(["cat" , "act","bat","tab","atb"]))
}