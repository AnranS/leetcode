/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let index1 = m - 1
    let index2 = n - 1
    let tail = m + n - 1
    while (index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[tail] = nums1[index1]
            index1--
            tail--
        } else {
            nums1[tail] = nums2[index2]
            index2--
            tail--
        }
    }
}

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3)
console.log(nums1)