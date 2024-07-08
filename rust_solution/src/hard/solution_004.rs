struct Solution;
impl Solution {
    pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
        let (nums1, nums2) = if nums1.len() > nums2.len() {
            (nums2, nums1)
        } else {
            (nums1, nums2)
        };
        let (m, n) = (nums1.len(), nums2.len());
        let mut imin = 0;
        let mut imax = m;
        let half_len = (m + n + 1) / 2;
        while imin <= imax {
            let i = (imin + imax) / 2;
            let j = half_len - i;
            if i < m && nums2[j - 1] > nums1[i] {
                imin = i + 1;
            } else if i > 0 && nums1[i - 1] > nums2[j] {
                imax = i - 1;
            } else {
                let max_of_left = if i == 0 {
                    nums2[j - 1]
                } else if j == 0 {
                    nums1[i - 1]
                } else {
                    std::cmp::max(nums1[i - 1], nums2[j - 1])
                };
                if (m + n) % 2 == 1 {
                    return max_of_left as f64;
                }
                let min_of_right = if i == m {
                    nums2[j]
                } else if j == n {
                    nums1[i]
                } else {
                    std::cmp::min(nums1[i], nums2[j])
                };
                return (max_of_left + min_of_right) as f64 / 2.0;
            }
        }
        0.0
    }
}
