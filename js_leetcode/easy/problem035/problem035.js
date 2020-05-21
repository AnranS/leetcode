/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0,
        high = nums.length - 1;
    // 空数组直接插在第一个位置    
    if (nums.length == 0) return 0;
    // 如果target小于第一个值 直接插在第一个位置
    if (target<nums[0]){
        return 0;
    }
    // 如果target大于最后一个值 直接插在最后一个位置
    if (target > nums[nums.length-1]) {
        return nums.length;
    }
    while (low < high) {
        // 取中间值 使用位运算减少向下取整
        let mid = (low + high) >> 1;
        // 如果mid位置的值和target相等 直接返回mid
        if (nums[mid] === target) return mid;
        // target大于mid的前一个且小于mid
        if (nums[mid-1]<target && nums[mid]>target) return mid;
        // mid大于target查找左边
        if (nums[mid]>target) {
            high = mid - 1;
        }
        // mid小于target查找右边
        if (nums[mid]<target) {
            low = mid + 1;
        }
    }
    return low;
}

let nums = [1,3,5,6];
console.log(searchInsert(nums, 5));