function detectCapital(str){
    let text = str.split('');
    if(text[0] === text[0].toUpperCase()){
        if(str === str.toUpperCase()){
            return true;
        }
        else if(str.slice(1, text.length+1) === str.slice(1, text.length+1).toLowerCase()){
            return true;
        }else{
            return false;
        }
    }else if (str === str.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}
console.log(detectCapital("Leetcode"));

var detectCapitalUse = function(word) {
    // either all capitals, all small cases, or Capital follow by small cases
    return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
};
