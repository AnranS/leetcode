/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0;
    let start = 0, end = nums.length - 1;

    while (start + 1 < end) {
        let mid = start + ((end - start) >> 1);
        if (nums[mid] < nums[mid - 1]) {
            end = mid;
        } else {
            start = mid;
        }
    }

    if (nums[start] > nums[end]) {
        return start;
    } else {
        return end;
    }
};

let nums = [1,2,3,1]

console.log(findPeakElement(nums));