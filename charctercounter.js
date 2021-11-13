function validateWord(s)
{
    let s1  = s.toUpperCase();
    let array = s1.split("");
    console.log(array);
    let obj = {};

    for(item of array)
    {
        (item in obj) ? obj[item]= obj[item] + 1 : obj[item] = 1;
    }

     const values = Object.values(obj);
     return values.every((item) => item===values[0]);
}

console.log(validateWord("abc123!!"));