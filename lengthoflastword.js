/* Question: Find length of last word of the Sentensce

*/

const lengthOfLastWord = (string) => {

    const array = string.split(/\s+/);

    console.log(array);

    return (array[array.length - 1].length === 0) ? array[array.length - 2].length : array[array.length - 1].length;
    // return array[array.length - 1].length

}

console.log(lengthOfLastWord("luffy is still joyboyr"));

/* one liner
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};
 */