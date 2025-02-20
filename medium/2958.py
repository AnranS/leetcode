from typing import Counter, List


class Solution:
    def maxSubarrayLength(self, nums: List[int], k: int) -> int:
        d = Counter()
        left = 0
        ans = 0
        for (right, n) in enumerate(nums):
            d[n] += 1
            while d[n] > k:
                d[nums[left]] -= 1
                left += 1
            ans = max(ans, right - left + 1)
        return ans