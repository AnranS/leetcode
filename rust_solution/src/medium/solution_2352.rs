struct Solution;
impl Solution {
    pub fn equal_pairs(grid: Vec<Vec<i32>>) -> i32 {
        let mut mp = std::collections::HashMap::new();

        for row in grid.iter() {
            *mp.entry(row).or_insert(0) += 1;
        }

        let mut ans = 0;
        let n = grid.len();
        let m = grid[0].len();

        for j in 0..m {
            let mut tmp = Vec::new();

            for i in 0..n {
                tmp.push(grid[i][j]);
            }

            ans += mp.get(&tmp).unwrap_or(&0);
        }

        ans
    }
}
