struct Solution;
impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let n = height.len();
        let (mut left, mut right, mut max) = (0, n - 1, 0);
        while left != right {
            let l = height[left];
            let r = height[right];
            let min_height = std::cmp::min(l, r);
            let width = right - left;
            max = std::cmp::max(max, min_height * width as i32);
            if l < r {
                left += 1;
            } else {
                right -= 1;
            }
        }
        max
    }
}
