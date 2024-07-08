struct Solution;
impl Solution {
    pub fn compress(chars: &mut Vec<char>) -> i32 {
        let mut ans: Vec<char> = Vec::new();
        let (mut left, mut right) = (0, 0);
        while left < chars.len() {
            ans.push(chars[left]);
            while right < chars.len() && chars[left] == chars[right] {
                right += 1;
            }
            if right - left != 1 {
                let num: String = (right - left).to_string();
                ans.append(&mut num.chars().collect());
            }
            left = right;
        }
        *chars = ans;
        return chars.len() as i32;
    }
}
