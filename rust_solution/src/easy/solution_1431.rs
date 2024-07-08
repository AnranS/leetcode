struct Solution;
impl Solution {
    pub fn kids_with_candies(candies: Vec<i32>, extra_candies: i32) -> Vec<bool> {
        let kid_len = candies.len();
        let mut res = Vec::with_capacity(kid_len);
        let max_candie_count = candies.iter().max().unwrap().clone();
        for candie in candies {
            if candie + extra_candies >= max_candie_count {
                res.push(true);
            } else {
                res.push(false);
            }
        }
        res
    }
}
