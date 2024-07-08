struct Solution;
impl Solution {
    pub fn gcd_of_strings(str1: String, str2: String) -> String {
        if str1.clone() + &str2 != str2.clone() + &str1 {
            String::default()
        } else {
            str1[0..Self::gcd(str1.len(), str2.len())].to_owned()
        }
    }

    pub fn gcd(a: usize, b: usize) -> usize {
        let mut a = a;
        let mut b = b;
        let mut remainder = a % b;
        while remainder != 0 {
            a = b;
            b = remainder;
            remainder = a % b;
        }
        b
    }
}
