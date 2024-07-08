struct Solution;

impl Solution {
    pub fn longest_subarray(nums: Vec<i32>) -> i32 {
        if nums.len() == 1 {
            return 0;
        }
        let mut ans = 0;
        let mut left = usize::MAX;
        let mut window_size: i32 = 0;
        for right in 0..nums.len() {
            if nums[right] == 1 {
                window_size += 1;
            } else if nums[right] == 0 && left == 0 {
                left = right;
                continue;
            } else if nums[right] == 0 && left != 0 {
                window_size = (right - left) as i32 - 1;
                left = right;
            }
            ans = std::cmp::max(ans, window_size);
        }
        if left == usize::MAX {
            ans -= 1;
        }
        ans as i32
    }
}
