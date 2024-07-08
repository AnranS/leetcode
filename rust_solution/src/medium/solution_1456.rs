struct Solution;

impl Solution {
    pub fn max_vowels(s: String, k: i32) -> i32 {
        let s = s.as_bytes();
        let k = k as usize;
        let mut ans = 0;
        let mut vowel = 0;
        for (i, &c) in s.iter().enumerate() {
            if c == b'a' || c == b'e' || c == b'i' || c == b'o' || c == b'u' {
                vowel += 1;
            }
            if i < k - 1 {
                continue;
            }
            ans = ans.max(vowel);
            let out = s[i + 1 - k];
            if out == b'a' || out == b'e' || out == b'i' || out == b'o' || out == b'u' {
                vowel -= 1;
            }
        }
        ans
    }
}
