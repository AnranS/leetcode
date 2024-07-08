struct Solution;
impl Solution {
    pub fn largest_altitude(gain: Vec<i32>) -> i32 {
        let (mut ans, mut pre_sum) = (0, 0);
        for x in gain {
            pre_sum += x;
            ans = std::cmp::max(pre_sum, ans);
        }
        ans
    }
}
