function removeDuplicates(s, k) {
    let stack = [];
    for(let i = 0 ; i<s.length; i++){
        let current = s[i];
        let peek = stack[stack.length-1];
        if(stack.length === 0 || peek[0]!== current ){
            stack.push([current, 1]);
        }else{
            peek[1]++
            if(peek[1] == k){
                stack.pop();
            }
        }
    }

    let result = '';

    for(let [charcter , count] of stack){
        result = result + charcter.repeat(count)
    }

    return result;

}

console.log(removeDuplicates("deeedbbcccbdaa", 3))



//source: https://www.youtube.com/watch?v=C9B9OMRO4ss