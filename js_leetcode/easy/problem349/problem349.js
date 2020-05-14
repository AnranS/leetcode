/**
 * @description leetcode 349 两个数组的交集(交集输出为唯一)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return [...new Set(nums1.filter((item)=>nums2.includes(item)))]
};