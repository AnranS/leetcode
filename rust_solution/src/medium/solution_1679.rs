struct Solution;
impl Solution {
    pub fn max_operations(nums: Vec<i32>, k: i32) -> i32 {
        let mut option_count = 0;
        let mut hash: std::collections::HashMap<i32, i32> = std::collections::HashMap::new();
        for x in nums {
            if let Some(n) = hash.get_mut(&(k - x)) {
                if *n > 0 {
                    *n -= 1;
                    option_count += 1;
                    continue;
                }
            }
            *hash.entry(x).or_insert(0) += 1;
        }
        option_count
    }
}
