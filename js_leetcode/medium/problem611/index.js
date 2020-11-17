/**
 * @param {number[]} nums
 * @return {number}
 */
let triangleNumber = function(nums) {
    if(!nums || nums.length < 3) return 0;
    let count = 0;
    // 排序
    nums.sort((a, b) => a - b);
    // 排序后从最右边开始 必定会num[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i]
    for(let k = nums.length - 1; k > 1; k--){
        let i = 0, j = k - 1;
        while(i < j){ 
            if(nums[i] + nums[j] > nums[k]){
                count += j - i;
                j--;
            } else {
                i++;
            }
        }
    }       
    return count;
}