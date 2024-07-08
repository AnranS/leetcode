struct Solution;
impl Solution {
    pub fn increasing_triplet(nums: Vec<i32>) -> bool {
        let mut dp2 = i32::MAX;
        let mut dp1 = i32::MAX;
        for x in nums {
            if x > dp2 {
                return true;
            }
            if x > dp1 {
                dp2 = x;
            } else {
                dp1 = x;
            }
        }
        false
    }
}
