/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // window存储下标
    let window = [], res = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // 判断窗口是不是超出长度
        if (window[0] <= i - k) {
            window.shift();
        }
        // 从右开始比较，当当前元素大于队列底元素时，直接弹出
        while(num>nums[window[window.length - 1]]) {
            window.pop();
        }
        window.push(i);
        // 当在窗口内时，加入元素
        if (i >= k - 1) {
            // 加入队顶元素
            res.push(nums[window[0]]);
        }
    }
    return res;
};

let nums = [1,3,1,2,0,5];
console.log(maxSlidingWindow(nums, 3));