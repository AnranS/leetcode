/**

 \* @param {string} s

 \* @return {string}

 */

let getLongestPlindrome = function (s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}
let longestPalindrome = function (s) {
    // 空或者一个字符直接返回
    if (s === '' || s.length === 1) return s;
    // 回文字符串：中心对称轴对称
    let palindrome = '';
    for (let i = 0; i < s.length; i++) {
        let len1 = getLongestPlindrome(s, i, i).length;
        if(len1 > palindrome.length) {
            palindrome =  getLongestPlindrome(s, i, i);
        }

        let len2 = getLongestPlindrome(s, i, i + 1).length;
        if(len2 > palindrome.length) {
            palindrome =  getLongestPlindrome(s, i, i + 1);
        }
    }

    return palindrome;
};
console.log(longestPalindrome('babad'));