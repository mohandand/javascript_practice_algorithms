let alpha = "abcdefghijklmnopqrstuvwxyz";
let alphaarry = alpha.split("");
console.log(alphaarry);

function alphaposition(text){
        let str = text.toLowerCase().replace(/^a-zA-Z/g,'');
        let strarray = str.split("");
        console.log(strarray);
}

console.log(alphaposition("Iam very shy2 write&read"));