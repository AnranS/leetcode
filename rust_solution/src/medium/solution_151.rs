struct Solution;
impl Solution {
    pub fn reverse_words(s: String) -> String {
        let mut ans = String::new();
        for str in s.split_whitespace().rev() {
            ans.push_str(str);
            ans.push(' ');
        }
        ans.pop();
        ans
    }
}
