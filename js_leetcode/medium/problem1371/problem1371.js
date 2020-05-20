/**
 * @description leetcode1371每个元音包含偶数次的最长子字符串
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let res = 0 
    let bitArray = 0 // 前缀区间的bitArray
    let vowel = { a: 1, e: 2, i: 4, o: 8, u: 16 } // 对照表
    let map = { 0: -1 } // map存放各个前缀区间的bitArray
    for (let i = 0; i < str.length; i++) { // 遍历str串
        let c = str[i] // 获取当前遍历的字符
        if (vowel[c] !== undefined) { // 当前遍历的字符是元音
            bitArray ^= vowel[c] // 求出当前前缀区间的bitArray
            if (map[bitArray] === undefined) { // 当前bitArray没存过
                map[bitArray] = i // 存入该bitArray，和对应的位置
            }
        }
        let distance = i - map[bitArray] //求距离，即满足条件的子串长度
        res = Math.max(res, distance) // 试图刷新最长记录
    }
    return res
};