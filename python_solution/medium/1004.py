from typing import List


class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        ans = left = count0 = 0
        for right, element in enumerate(nums):
            count0 += 1 - element
            while count0 > k:
                count0 -= 1 - nums[left]
                left += 1
            ans = max(ans, right - left + 1)
        return ans
