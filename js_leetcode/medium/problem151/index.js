/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let trimStr = s.trim();
    let word = '';
    let strQueue = [];
    for (let i = 0; i < trimStr.length; i++) {
        if (trimStr[i] === ' ' && word) {
            strQueue.unshift(word);
            word = '';
        } else {
            word += trimStr[i];
        }
        word = word.trim();
    }
    word && strQueue.unshift(word);
    return strQueue.join(' ');
};

let str1 = "the sky is blue";
let str2 = "  hello world!  ";
let str3 = "a good   example";
let str4 = "  Bob    Loves  Alice   ";
let str5 = "Alice does not even like bob";
console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));
console.log(reverseWords(str4));
console.log(reverseWords(str5));