var majorityElement = function(nums) {
    let map = new Map();
    let half = nums.length>>1;

    for(let i = 0;i<nums.length;i++) {
        if(!map.has(nums[i])) {
            if(1>half) return nums[i];
            map.set(nums[i], 1);
        } else {
            let count = map.get(nums[i]) + 1;
            if(count > half) return nums[i];
            map.set(nums[i], count);
        }
    }
};