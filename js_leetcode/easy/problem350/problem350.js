/**
 * @description leetcode350 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let hash = new Map()
    let res = []
    for(let i = 0; i < nums1.length; i++) {
        if(hash.has(nums1[i])) {
            hash.set(nums1[i], hash.get(nums1[i]) + 1)
        } else {
           hash.set(nums1[i], 1) 
        }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        let temp = nums2[i]
        let hashKey = hash.get(temp)
        if(hash.has(temp)) {
            res.push(temp)
            if(hashKey > 1) {
                hash.set(temp, hashKey - 1)
            } else {
                hash.delete(temp)
            }
        }
    }
    return res
};

let num1 = [2];
let num2 = [1, 2, 2, 4];

console.log(intersect(num1, num2));
