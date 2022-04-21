function counts(teamA, teamB) {
    let count =0;
    for(let i=0;i<teamB.length;i++){
        for(let j=0;j<teamA.length;j++){
            if(teamB[i]>=teamA[j]){
                count++
            }
        }
        console.log(count)
        count=0
    }

}

console.log(counts([1, 4, 2, 4],[3, 5]))