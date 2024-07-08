struct Solution;
impl Solution {
    pub fn merge_alternately(word1: String, word2: String) -> String {
        let mut chars1 = word1.chars();
        let mut chars2 = word2.chars();
        let len1 = word1.len();
        let len2 = word2.len();
        let mut ans = String::with_capacity(len1 + len2);
        for _ in 0..len1.min(len2) {
            ans.push(chars1.next().unwrap());
            ans.push(chars2.next().unwrap());
        }
        ans.extend(chars1);
        ans.extend(chars2);
        ans
    }
}
