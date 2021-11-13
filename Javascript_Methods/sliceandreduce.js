// sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) // => "product"
// Explanation
// The sum of the 3 highest numbers is 41 + 36 + 20 = 97

// The product of the lowest 3 numbers is 8 x 9 x 10 = 720

// The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"

const sumOrProduct = (arr, n) => {
    const sorted = arr.sort((a, b) => a - b);
    //console.log(sorted);
    const part1 = sorted.slice(-n);
    const part2 = sorted.slice(0,n);
    const sum = part1.reduce((acc,i) => acc+i, 0);
    const product = part2.reduce((acc,i) => acc*i, 1);
    //const sum = sorted.slice(-n).reduce((acc, i) => acc + i);
    //const product = sorted.slice(0, n).reduce((acc, i) => acc * i, 1);
    console.log(sum);
     console.log(product);
    return sum > product ? 'sum' : sum < product ? 'product' : 'same';
  }
  
console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

// Source for Slice and splice: https://www.tothenew.com/blog/javascript-splice-vs-slice/