var twoSum = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while(left < right) {
        let sum = nums[left] + nums[right];
        if(sum>target) right--;
        if(sum<target) left++;
        if(sum === target) return [nums[left], nums[right]];
    }
    return [];
};