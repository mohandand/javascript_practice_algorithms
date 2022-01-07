var isAnagram = function(s,t){
    let obj1 = {};
    let obj2 = {};

    for(let char of s){
        obj1[char] ? obj1[char]++ :obj1[char]=1;
    }
    for(let cha of t){
        obj2[cha] ? obj2[cha]++ :obj2[cha]=1;
    } 

    let rotate;

    if(s.length>t.length){
        rotate = obj1
    }else{
        rotate = obj2
    }

    for(let i in rotate){
        if(obj1[i] != obj2[i]){
            return false
        }
    }

    return true;

}
console.log(isAnagram("a","ab"));

//Approach-2

// var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('');
// };