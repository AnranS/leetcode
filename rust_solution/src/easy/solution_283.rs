struct Solution;
impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        if nums.is_empty() {
            return;
        }
        let nums_len = nums.len();
        let (mut i, mut j) = (0, 0);
        while i < nums_len {
            if nums[i] != 0 {
                nums.swap(i, j);
                j += 1;
            }
            i += 1;
        }
    }
}
