/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // 缓存尾部乘积
    let lastArr = [];
    let res = [];
    lastArr.push(1);
    let sum = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        sum *= nums[i];
        lastArr.push(sum);
    }
    sum = 1;
    for (let i = 0; i < nums.length; i++) {
        res.push(sum * lastArr[nums.length - i - 1]);
        sum *= nums[i]
    }

    return res;
};

let arr = [1, 2, 3, 4];

console.log(productExceptSelf(arr));