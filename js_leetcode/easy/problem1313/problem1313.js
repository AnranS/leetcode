/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let res = [];
    let i = 0, j = 1;
    while (j < nums.length) {
        for (let index = 0; index < nums[i]; index++) {
            res.push(nums[j]);
        }
        i += 2;
        j += 2;
    }
    return res;
};

let nums = [1,1,2,3];
console.log(decompressRLElist(nums));