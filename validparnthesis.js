var isValid = function(s) {
    let stack = [];
    let par = {
        '(':')',
        '{' : '}',
        '[' : ']'
    }
    for(let char of s){
        if(par[char]){
            stack.push(par[char])
        }else{
            if(stack.pop() !== char) return false
        }
    }
    return (!stack.length)
};