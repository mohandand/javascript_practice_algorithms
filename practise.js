function add(x){
  return function adds(y){
    return x+y;
  }
}

let sum = add(5);

console.log(sum(10))
