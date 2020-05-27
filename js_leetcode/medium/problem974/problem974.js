/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = (A, K) => {
    let map = { 0: 1 }   // 为了让边界情况也能适用通式
    let preSum = 0       // 保存前缀和模K的结果，初始值0
    let count = 0        // 计数
    for (let i = 0; i < A.length; i++) { // 一次遍历做完所有事
        preSum = (preSum + A[i]) % K // 上一次的前缀和累加当前项，再mod
        if (preSum < 0) preSum += K  // 处理preSum为负数的情况，需要加 K
        if (map[preSum]) {      // 之前存过的 与当前preSum相等的key
            count += map[preSum]  // 把它出现的次数累加给count
        }
        if (map[preSum]) {      // 以前存过，出现次数+1
            map[preSum]++
        } else {                // 新存入，初始值1
            map[preSum] = 1
        }
    }
    return count              // 返回计数结果
}