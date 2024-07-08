struct Solution;
impl Solution {
    pub fn pivot_index(nums: Vec<i32>) -> i32 {
        let nums_len = nums.len();
        let mut pre_sum = vec![0; nums_len];
        let mut sum = 0;
        for i in 0..nums_len {
            pre_sum[nums_len - i - 1] = sum;
            sum += nums[nums_len - 1 - i];
        }
        sum = 0;
        for i in 0..nums_len {
            if sum == pre_sum[i] {
                return i as i32;
            }
            sum += nums[i];
        }
        -1
    }
}
