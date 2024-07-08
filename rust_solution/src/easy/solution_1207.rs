use std::collections::{HashMap, HashSet};

struct Solution;

impl Solution {
    pub fn unique_occurrences(arr: Vec<i32>) -> bool {
        let mut map = HashMap::new();
        for i in arr {
            *map.entry(i).or_insert(0) += 1;
        }
        let mut set = HashSet::new();
        for (_, val) in &map {
            if set.contains(&val) {
                return false;
            }
            set.insert(val);
        }
        true
    }
}
