function nrep(str){
  let obj = {};
  let astr = str.split('');
  for(let i of astr){
    obj[i] ? obj[i]++ : obj[i]==1
  }
  return (Object.values(obj)).find((item) => item ===1 )
}
console.log("aabbccde")

