/**
 * @author anran
 * @description leetcode第一题 两数之和
 */


 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tmpMap = new Map();
    for(let index = 0;index < nums.length; index ++) {
        let toSearch = target - nums[index];
        if(tmpMap.has(toSearch)) {
            return [tmpMap.get(toSearch), index]
        }
        tmpMap.set(nums[index], index);
    }
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));