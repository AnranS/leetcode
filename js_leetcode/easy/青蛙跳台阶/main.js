/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    let [res1, res2] = [1, 1];
    for (let i = 0; i < n; i++) {
        let tmp = res1;
        res1 = res2;
        // 这个是leetcode要求的
        res2 = (tmp + res1) % 1000000007;
    }
    return res1;
};

console.log(numWays(44));
// console.log(numWays(2));
// console.log(numWays(10));
// console.log(numWays(100));