function validate(s){
    let obj = {};
    s.toLowerCase().split("").forEach((s) => {
        obj[s]? obj[s]++ : obj[s]=1
    })

    return new Set(Object.values(obj)).size == 1
}

console.log(validate("ABC12343"))

// function validateWord(s) {
//     var freq = {}
//     s.toLowerCase().split('').forEach(function(s) {
//       freq[s] ? freq[s]++ : freq[s] = 1
//     })
  
//     return new Set(Object.values(freq)).size == 1
//   }