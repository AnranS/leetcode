/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0];
    let maxArrMemo = [];
    maxArrMemo[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxArrMemo[i] = Math.max(nums[i], maxArrMemo[i - 1] + nums[i]);
        max = Math.max(max, maxArrMemo[i]);
    }
    return max;
};

let tmpArr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(tmpArr));