struct Solution;
impl Solution {
    pub fn reverse_vowels(s: String) -> String {
        let mut strs: Vec<char> = s.chars().collect();
        let mut left = 0;
        let mut right = strs.len() - 1;

        let vowels = ['a', 'e', 'i', 'o', 'u'];

        while left < right {
            let left_char = strs[left].to_ascii_lowercase();
            let right_char = strs[right].to_ascii_lowercase();
            if vowels.contains(&left_char) && vowels.contains(&right_char) {
                strs.swap(left, right);
                left += 1;
                right -= 1;
            } else if vowels.contains(&left_char) {
                right -= 1;
            } else if vowels.contains(&right_char) {
                left += 1;
            } else {
                left += 1;
                right -= 1;
            }
        }

        String::from_iter(strs)
    }
}
