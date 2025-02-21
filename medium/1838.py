from typing import List


class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        nums.sort()
        ans = left = 0
        n = len(nums)
        s = 0

        for right in range(n):
            s += nums[right]
            while nums[right] * (right - left + 1) - s > k:
                s -= nums[left]
                left += 1
            ans = max(ans, right - left + 1)
        return ans
