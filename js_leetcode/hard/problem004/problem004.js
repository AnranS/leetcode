/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function medianOf(nums) {
    if(nums.length % 2 === 0) {
        return (nums[Math.floor(nums.length/2)] + nums[Math.floor(nums.length/2) - 1])/2;
    }

    return nums[Math.floor(nums.length/2)];
}
var findMedianSortedArrays = function (nums1, nums2) {
    let [i, j] = [0, 0];
    let [lenNums1, lenNums2] = [nums1.length, nums2.length];
    let res = new Array(lenNums1 + lenNums2);

    for(let k = 0; k < res.length; k++) {
        if(i === lenNums1 || (i<lenNums1 & j<lenNums2 && nums1[i] > nums2[j])){
            res[k] = nums2[j];
            j++;
            continue;
        }
        if(j === lenNums2 || (i<lenNums1 & j<lenNums2 && nums1[i] <= nums2[j])){
            res[k] = nums1[i];
            i++;
            continue;
        }
    }
    return medianOf(res);
};

let nums1 = [1, 2];
let nums2 = [4];

let res = findMedianSortedArrays(nums1, nums2);
console.log(res);