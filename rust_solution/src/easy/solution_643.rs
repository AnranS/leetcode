struct Solution;
impl Solution {
    pub fn find_max_average(nums: Vec<i32>, k: i32) -> f64 {
        let mut ans = 0;
        let mut slider = 0;
        for i in 0..nums.len() {
            if i < k as usize {
                slider += nums[i];
                ans = slider;
            } else {
                slider = slider - nums[i - k as usize] + nums[i];
                ans = std::cmp::max(ans, slider);
            }
        }
        ans as f64 / k as f64
    }
}
