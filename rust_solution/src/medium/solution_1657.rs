struct Solution;
impl Solution {
    pub fn close_strings(s: String, t: String) -> bool {
        if s.len() != t.len() {
            return false;
        }

        let mut s_cnt = [0; 26];
        for c in s.as_bytes() {
            s_cnt[(c - b'a') as usize] += 1;
        }

        let mut t_cnt = [0; 26];
        for c in t.as_bytes() {
            t_cnt[(c - b'a') as usize] += 1;
        }
        for i in 0..26 {
            if (s_cnt[i] == 0) != (t_cnt[i] == 0) {
                return false;
            }
        }

        s_cnt.sort_unstable();
        t_cnt.sort_unstable();
        s_cnt == t_cnt
    }
}
