/**
 * @param {string[]} strs
 * @return {string}
 */
function getPrefix(prefix, str) {
    let i = 0;
    let len = Math.max(prefix.length, str.length);
    while (i < len) {
        if (prefix[i] !== str[i]) return prefix.substring(0, i);
        i++;
    }
    return prefix.length > str.length ? str : prefix;
}

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    let maxPrefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        maxPrefix = getPrefix(maxPrefix, strs[i]);
        if (maxPrefix === '') {
            return '';
        }
    }
    return maxPrefix;
};

let testStrs = ["dog","racecar","car"];

console.log(longestCommonPrefix(testStrs));