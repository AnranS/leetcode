struct Solution;
impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        if s.is_empty() {
            return true;
        }
        let s: Vec<char> = s.chars().collect();
        let t: Vec<char> = t.chars().collect();
        let mut j = 0;
        for i in 0..t.len() {
            if t[i] == s[j] {
                j += 1;
            }
            if j == s.len() {
                return true;
            }
        }
        false
    }
}
