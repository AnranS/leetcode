/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if(!s.length) return 0;
    let max = 1;//最大长度
    let now = "";//当前无重复字串
    let left = 0;//当前无重复字串的起始下标
    let loop = 0;//循环次数
    let idx;//当前字符所在now中的位置

    while(loop < s.length){
        idx = now.indexOf(s[loop]);
        if(idx >= 0){
            //假如当前字符存在重复 则把起始下标移动到对应位置
            //例如 在abcdb...中 此时now = abcd  left = 0
            //loop = 4 即当前字符为b 则把起始下标移到重复字符b的后一位 即c
            left += idx + 1;
        }
        now = s.slice(left, loop + 1);
        max = Math.max(now.length, max); 
        loop++;   
    }
    return max;
};

console.log(lengthOfLongestSubstring(' '));