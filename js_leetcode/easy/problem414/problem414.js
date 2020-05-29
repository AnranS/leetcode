/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // 缓存队列
    let tmpArr = new Array();
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0;i<nums.length;i++) {
        if(nums[i] > max) {
            if(tmpArr.length === 3) {
                tmpArr.pop();
            }
            tmpArr.push(nums[i]);
            max = nums[i];
        }
    }
    return tmpArr.sort();
}

let tmpArr = [2, 3, 1];
console.log(thirdMax(tmpArr));