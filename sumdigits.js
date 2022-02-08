var addDigits = function(num) {
    let temp = 0;
    if(num.length !== 1  ){
        temp = sum(num)
    }
};
function sum(numb){
    let num1 = numb.split('')
    let sum = num1.reduce(reducer)
    return sum
}