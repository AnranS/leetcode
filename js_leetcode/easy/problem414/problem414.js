/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 3) return Math.max(...nums);
    let max1 = -Infinity; // 存储最大 置为最小值
    let max2 = -Infinity; // 存储第二大 置为最小值
    let max3 = -Infinity; // 存储第三大 置为最小值
    for (let n of nums) {
        if (n > max1) { // 先比较最大的，成功就把值向后传递，把第三大的丢掉
            max3 = max2;
            max2 = max1;
            max1 = n;
            continue;
        }
        if (n !== max1 && n > max2) { // 第一个判断没中，判断是不是第二大的，注意值不能等于最大，这是为了防止重复
            max3 = max2;
            max2 = n;
            continue;
        }
        if (n !== max1 && n !== max2 && n > max3) { // 同上，多了个判断条件
            max3 = n;
            continue;
        }
    }
    if (max3 === -Infinity || max2 === -Infinity || max1 === -Infinity) return Math.max(max1, max2, max3); // 这里其实就是判断，在去重后的长度是不是小于3，不是的话三个max肯定都不是-Infinity
    return max3; 
};

let tmpArr = [2, 3, 1];
console.log(thirdMax(tmpArr));