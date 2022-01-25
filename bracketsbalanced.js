var minSwaps = function (s) {
    let count = 0;
    for (let ch of s) {
        ch == "[" ? ++count : --count; // level out [ & ]
        if (count < 0) count = 1; // reset to 1, we only care about ] on the right side
    }
    return count / 2; // take half
};