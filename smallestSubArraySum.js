function smallestSubWithSum(arr, n, x)
{
    // Initialize current sum and minimum length
    let curr_sum = 0, min_len = n + 1;
 
    // Initialize starting and ending indexes
    let start = 0, end = 0;
    while (end < n) {
        // Keep adding array elements while current sum
        // is smaller than or equal to x
        while (curr_sum <= x && end < n)
            curr_sum += arr[end++];
 
        // If current sum becomes greater than x.
        while (curr_sum > x && start < n) {
            // Update minimum length if needed
            if (end - start < min_len)
                min_len = end - start;
 
            // remove starting elements
            curr_sum -= arr[start++];
        }
    }
    return min_len;
}

console.log(smallestSubWithSum([9,4,1,23,3,26],6,25))