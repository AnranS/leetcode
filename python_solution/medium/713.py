from typing import List


class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        prod = 1
        left = 0
        ans = 0
        if k <= 1:
            return ans
        for right, c in enumerate(nums):
            prod *= c
            while prod >= k:
                prod /= nums[left]
                left += 1
            ans += right - left + 1
        return ans
