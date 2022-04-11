function generateHashtag (str) {
  if(str.lenght===0) return " "
  let arr=[];
  let strarr = str.split(' ')
  let res = '#'
  for(let i=0 ;i<strarr.length;i++){
    let temp = strarr[i].charAt(0).toUpperCase();
    temp = strarr[i].replace(strarr[i][0],temp)
    arr.push(temp)
  }
  let cstring = arr.join('')
  return res+cstring
}

console.log(generateHashtag("hello All Iam mohan"))