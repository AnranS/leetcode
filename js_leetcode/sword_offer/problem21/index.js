var exchange = function(nums) {
    let i = 0, j = nums.length - 1;

    while(i<j) {
        if((nums[i]&1) === 0 && (nums[j]&1) === 1) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
        while(i < nums.length && ((nums[i]&1) === 1)){i++;};
        while(j>=0 && ((nums[j]&1) === 0)) {j--};
    }
    return nums;
};
let nums = [1,2,3,4];

console.log(exchange(nums));