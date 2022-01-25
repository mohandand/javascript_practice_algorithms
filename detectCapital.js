function detectCapital(str){
    let text = str.split('');
    if(text[0] === text[0].toUpperCase){
        if(str === str.toUpperCase){
            return true;
        }
        else if(str.slice(1, text.length+1) === str.toLowerCase){
            return true;
        }else{
            return false;
        }
    }else if (str === str.toLowerCase){
        return true;
    }
    else{
        return false;
    }
}
console.log(detectCapital("USA"));