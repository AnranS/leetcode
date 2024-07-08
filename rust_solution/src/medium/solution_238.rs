struct Solution;
impl Solution {
    pub fn product_except_self(nums: Vec<i32>) -> Vec<i32> {
        let num_len = nums.len();
        let mut ans = vec![0; num_len];
        println!("ans {}", ans.len());
        ans[0] = 1;
        for i in 1..num_len {
            ans[i] = ans[i - 1] * nums[i - 1]
        }
        let mut right_res = 1;
        for i in (0..num_len).rev() {
            ans[i] = ans[i] * right_res;
            right_res *= nums[i];
        }
        ans
    }
}
