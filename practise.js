let count= 0;
function add(x){
  return function adds(y){
    return count++
  }
}

let sum = add();

console.log(sum())
sum()
sum()
console.log(sum())

