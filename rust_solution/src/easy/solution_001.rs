struct Solution;
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut index = 0;
        while index < nums.len() {
            let current = nums[index];
            let rest = target - current;
            let mut j = 0;
            while j < nums.len() {
                if j == index {
                    j += 1;
                    continue;
                } else if nums[j] == rest {
                    return vec![index as i32, j as i32];
                }
                j += 1;
            }
            index += 1;
        }
        vec![0, 0]
    }
}
