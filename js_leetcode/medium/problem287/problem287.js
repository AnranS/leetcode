/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slowPointer = 0
    let fastPointer = 0
    while (true) {
        slowPointer = nums[slowPointer]
        fastPointer = nums[nums[fastPointer]]
        if (slowPointer == fastPointer) {
            let nextslowPointer = 0
            while (nums[nextslowPointer] !== nums[slowPointer]) {
                slowPointer = nums[slowPointer]
                nextslowPointer = nums[nextslowPointer]
            }
            return nums[nextslowPointer]
        }
    }
};