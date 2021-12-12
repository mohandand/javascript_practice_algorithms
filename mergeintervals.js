var merge = function(intervals){
    var res=[];
    intervals.sort(function(a,b){
        return a[0]-b[0];
    });

    console.log(intervals);
}

console.log(merge[[1,2],[2,5],[5,10],[3,4]]);