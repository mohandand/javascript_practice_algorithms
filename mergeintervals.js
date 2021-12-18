//Merging Intervals program

var merge = function(intervals){
    var res=[];
    intervals.sort(function(a,b) {
         return a[0] - b[0];
    });
    for(let i=0;i<intervals.length;i++){
        var pre = res[res.length-1];
        if(i==0 || intervals[i][0]>pre[1])
        {
            res.push(intervals[i])
        }
        else{
            pre[1] = Math.max(pre[1],intervals[i][1]);
        }
    }
    return res;
}
console.log(merge[[1,2],[2,5],[5,10],[3,7]]);
