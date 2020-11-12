/**
 * @description 移动零
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = (nums) => {
    let i = 0, j = 0
    while (i < nums.length) {
      if (nums[i] !== 0) {
        const tmp = nums[j]
        nums[j++] = nums[i]
        nums[i] = tmp
      }
      i++
    }
  }

let nums = [1, 0, 3, 6]
moveZeroes(nums);
console.log(nums);